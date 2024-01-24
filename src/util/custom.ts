import { TestA, TestBEnum } from './types.ts';

const composeString = (a: string, b: string): string => `${a} ${b}`;

export {
    composeString,
    TestA,
    TestBEnum,
}