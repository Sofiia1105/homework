// #1
// 1) В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6
// и тд
// Если массив непарный - последний элемент не трогать.
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5
A = [];
n = +prompt();
A.length = n;

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 50 + 1);
}

console.log(A);

if (A.length % 2 == 0) {
   for (i = 0; i < A.length; i++) {
       k = 1;
       k += i;

       c = A[i];
       A[i] = A[k];
       A[k] = c;

       i++;
   }
} else {
   for (i = 0; i < A.length-1; i++) {
       k = 1;
       k += i;

       c = A[i];
       A[i] = A[k];
       A[k] = c;

       i++;
   }
}

console.log(A);

// 2) В одномерном массиве заполненым случайными числами
// * Найти разность между максимальным и минимальным элементами массива

min = A[0];
max = A[0];
current = 0;

for (i = 0; i < A.length; i++) {
   if (A[i] < min) {
       min = A[i];
   }

   if (A[i] > max) {
       max = A[i];
   }
   current += A[i];
}

dif = max - min;

console.log('min = ' + min + '; max = ' + max + '; dif = ' + dif);

// * Вывести элементы массива, которые больше среднего арифметического

avg = current / A.length;

for (i = 0; i < A.length; i++) {
   if (A[i] > avg) {
       console.log(A[i]+' > '+avg);
   }
}

// * Определить индексы элементов массива, значение которых лежит в указанном пределе.
// Предел вводится с клавиатуры как A, B


B = +prompt();
C = +prompt();

for (i = 0; i < A.length; i++) {
   if (A[i] >= B && A[i] <= C) {
       console.log(i);
   }   
}

// * Удалить повторяющиеся элементы из массив, оставить массив уникальных значений

for (i = 0; i < A.length; i++) {
    for (j = i + 1; j < A.length; j++) {
        if (A[i] == A[j]) {
            A.splice(j, 1);
            j--;
        }
    }
}
console.log(A);