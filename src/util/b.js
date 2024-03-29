import { add as lodashAdd } from 'lodash-es';

console.log("add was declared");
const add = (a, b) => {
    return lodashAdd(a, b);
};

console.log("divide was declared");
const divide = (a, b) => {
    return a / b;
};

export { add, divide };
