import {delay, frameDelay, run} from './sequence-utils';

export function* sandbox() {
    console.log('\texampleJob -> started');

    const response = yield run(printMessage, {message: 'HELLO'});

    console.log('\texampleJob: response from printMessage -> ', response);

    console.log('\texampleJob: delaying for 5 seconds...');
    yield delay(5000);

    console.log('\texampleJob: frameDelay is done. exiting');

    return 9000;
}

export function* theParentJob() {
    yield delay(2000);
    const response = yield run(theChildJob, {message: 'HELLO FROM PARENT'});
    yield delay(2000);
    return 'PARENT JOB COMPLETED & ' + response;
}

function* theChildJob() {
    yield delay(2000);
    const response = yield run(theGrandChildJob, {message: 'HELLO FROM CHILD JOB'});
    yield delay(2000);
    return 'CHILD JOB COMPLETED & ' + response;
}

function* theGrandChildJob() {
    yield delay(2000);
    return 'GRANDCHILD JOB COMPLETED';
}

function* printMessage({message}) {
    console.log('\tprintMessage -> started');

    console.log('\t -> ', message);

    console.log('\tprintMessage: delaying for 180 frames');
    yield frameDelay(60 * 3);

    return yield 'WORLD';
}
