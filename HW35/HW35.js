//Написать функцию pluck, которая берет массив объектов и
//возвращает массив значений определенного поля: 
let characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 },
    { 'name': 'chris', 'age': 22 },
    { 'name': 'bill', 'age': 89 }
]

let pluck = function (mass = [], key = '') {
    return mass.map((item) => {
        return item[key]
    })
}

console.log(pluck(characters, 'name'))