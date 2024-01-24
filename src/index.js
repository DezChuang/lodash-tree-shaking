
const loadUtilA = () => import('./util/a');
const loadUtilB = () => import('./util/b');

const process = async (a, b) => {
    const utilModule = await loadUtilB();
    return utilModule.add(a, b) / utilModule.add(a, b);
};

console.log(process(1, 2));
