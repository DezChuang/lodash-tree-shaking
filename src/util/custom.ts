import { TestType, TestEnum } from './types.ts';

const composeString = (a: string, b: string): TestType => {
    console.log(`${a} ${b}`);

    return {
        a,
        b: 2,
        c: TestEnum.A,
    };
};

export {
    composeString,
    TestType,
}