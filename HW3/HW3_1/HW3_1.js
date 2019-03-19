// Создать массив А размерностью n. Заполнить случайными 
//числами любом диапазоне.
// Например A = [23,1,2,52,5,34,23,6,246,436];
// 1. проверить все числа на простоту, и найденные простые 
//числа сохранить в массив B.
// 2. найти максимальное число и минимальное число.

A = [];
B = [];

n = +prompt();

A.length = n;

for (i = 0; i < A.length; i++){

    A[i] = Math.floor(Math.random()*20+1);

    isPrime = true;
       
    for(j = 2; j < A[i]; j++){

        if (A[i] % j == 0){
            isPrime = false;
            break;
        }
    }

    if (isPrime){
        B[B.length] = A[i];
    }
}

console.log(A);
console.log(B);

min = Math.min.apply(Math, A);
max = Math.max.apply(Math, A);

console.log(min + ' '+max)

//Элементы массива между min -- max записать в массив B. Массив взять из 1го задания
