import {game} from '../../game';
import {SequenceGenerator} from '../../game/sequencer';

export function run(generator: SequenceGenerator, args?: any) {
    return game.sequencer.run(generator, args);
}

export function delay(milliseconds: number) {
    return new Promise<void>((resolve) => {
        const start = performance.now();
        function step() {
            const elapsed = performance.now() - start;
            if (elapsed < milliseconds) {
                return requestAnimationFrame(step);
            }
            resolve();
        }
        requestAnimationFrame(step);
    });
}

export function frameDelay(frameCount: number) {
    return new Promise<void>((resolve) => {
        let frame = 0;
        function step() {
            frame++;
            if (frame < frameCount) {
                return requestAnimationFrame(step);
            }
            resolve();
        }
        requestAnimationFrame(step);
    });
}
