import { composeString } from './util/custom.ts';

const init = () => {
    const result = composeString('Hello', 'World');
    console.log(result);
};

init();
