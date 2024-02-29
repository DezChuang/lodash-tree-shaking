
const loadUtilA = () => import('./util/a');
const loadUtilB = () => import('./util/b');

const process = async (a, b) => {

    let utilModule;
    if (Math.random() > 0.5) {
        utilModule = await loadUtilA();
        return utilModule.multiply(a, b) / utilModule.multiply(a, b);
    } else {
        utilModule = await loadUtilB();
        return utilModule.add(a, b) / utilModule.add(a, b);
    }
};

console.log(process(1, 2));
