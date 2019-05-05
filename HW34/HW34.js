//Написать функцию рассчета суммы всех чисельных свойств объекта, включая вложености. 
//Функция не должна быть описана в структуре объекта.

let obj = {
    a: 'hello',
    b: {
        a: 1,
        b: 2,
        c: 'yes'
    },
    c: 1.75,
    d: true,
    e: 2,
    f: {
        g: 52,
        h: {
            j: 5,
            k: '',
            c: 13
        },
        i: 8.9
    }
}


let sum = function () {
    let getSum = 0;

    for (let key in this) {
        if (typeof this[key] === 'number') {
            getSum += this[key];
        } else if (typeof this[key] === 'object') {            
            getSum += sum.call(this[key]);
        }
    }

    return getSum;
}
console.log(sum.call(obj));