import { observable, reaction, computed, autorun } from 'mobx';

const calculator = observable({
    a: 1,
    b: 2
});

reaction(
    () => calculator.a,
    (value, reaction) => {
        console.log(`a => ${value}`);
    }
);

reaction(
    () => calculator.b,
    value => {
        console.log(`b => ${value}`);
    }
);

calculator.a = 10;
calculator.b = 20;
