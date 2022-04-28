let debug = false;

export type SequenceGenerator = (args: any) => Generator<any>;

type Sequence = {
    name: string,
    iterator: Generator<any>,
    timestamp: number,
    cancelled: false,
    promise: Promise<any>,
    args: any,
    resolve: (any) => void,
    reject: (Error) => void,
};

function createSequence(generator: SequenceGenerator, args?: any) {
    let resolve;
    let reject;

    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    return {
        name: generator.name,
        iterator: generator(args),
        timestamp: Date.now(),
        cancelled: false,
        promise,
        args,
        resolve,
        reject,
    } as Sequence;
}

export class Sequencer {
    #suspended: Sequence[] = [];
    #queued: Sequence[] = [];
    #current: Sequence = null;

    run(generator: SequenceGenerator, args?: any) {
        const sequence = createSequence(generator, args);
        this.#start(sequence);
        return sequence.promise;
    }

    cancelAll() {
        this.cancelCurrent();
        this.#queued.length = 0;
        this.#suspended.length = 0;
    }

    cancelCurrent() {
        this.#cancel(this.#current);
    }

    enableDebugMessages(value) {
        debug = !!value;
    }

    #cancel(sequence) {
        if (sequence) {
            sequence.cancelled = true;
        }
        if (sequence === this.#current) {
            this.#current = null;
        }
    }

    #start(sequence, resolvedValue?) {
        if (!sequence) {
            return;
        }

        if (this.#current) {
            log(`sequence queued. name=${sequence.name}`);
            this.#queued.push(sequence);
            return;
        }

        log(`sequence started. name=${sequence.name}`);
        this.#current = sequence;
        this.#next(sequence, resolvedValue);
    }

    #next(sequence, resolvedValue?) {
        if (sequence.cancelled) {
            return;
        }

        const result = sequence.iterator.next(resolvedValue);

        if (result.then) {
            throw new Error(`sequence iterator "${sequence.name}" returned a promise. Async generators are not supported.`);
        }

        const {value, done} = result;

        if (this.#queued.length) {
            this.#suspend(sequence);
            this.#dequeue();
            return;
        }

        Promise.resolve(value).then((resolvedValue) => {
            if (done) {
                return this.#complete(sequence, resolvedValue);
            } else {
                this.#next(sequence, resolvedValue);
            }
        });
    }

    #dequeue() {
        this.#start(this.#queued.shift());
    }

    #suspend(sequence: Sequence) {
        log(`sequence suspended. name=${sequence.name}`);
        this.#suspended.push(sequence);
        if (this.#current === sequence) {
            this.#current = null;
        }
    }

    #complete(sequence, resolvedValue) {
        const elapsed = Date.now() - sequence.timestamp;
        log(`job completed. name=${sequence.name} elapsed=${elapsed}ms`);
        sequence.resolve(resolvedValue);
        if (this.#current === sequence) {
            this.#current = null;
        }
        const nextJob = this.#suspended.pop();
        if (nextJob) {
            this.#start(nextJob, resolvedValue);
        }
    }

}

function log(message, args?) {
    if (debug) {
        console.debug(message, args || '');
    }
}
