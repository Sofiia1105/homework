// Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];

// // проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// // найти максимальное число и минимальное число.

A = [];
B = [];

A.length = 20;

for (i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*10+1)

    isPrime = true;

    for (j = 2; j < A[i]; j++){
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

// maxnum = Math.max.apply(Math, A);
// minnum = Math.min.apply(Math, A);

//-------------------------------
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  
  A.sort(compareNumeric);

  min = A.slice(0,1);
  max = A.slice(-1);

    
 //   console.log(B);
    console.log(min +' min '+ max + ' max');

 //-------------------------------------------
 //Элементы массива между min -- max записать в массив B. Массив взять из 1го задания
 for (i = 0; i < A.length; i++){
    
    if (A[i] != min && A[i] != max){
        B[B.length] = A[i];
    }
 }

 //console.log(A+' min'+min); 
 //console.log(B);

//-------------------------------------------
 //В массиве A поменять местами min и max. Массив взять из 2го задания
 A[0] = +max.join();
 A[A.length-1] = +min.join();
 //console.log(A);