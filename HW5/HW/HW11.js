//a) Написать функцию заполнения массива. Имя произвольное.
//b) написать функцию, которая примет как аргумент(параметр) 
//два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
//Тот массив, сумма которого большая - должен вернутся функцией.

function fullList (list){
    for (i = 0; i < list.length; i++){
        list[i] = Math.floor(Math.random()*20);
    }
}

A = new Array(20);
fullList(A);
B = new Array(20);
fullList(B);

console.log(A);

console.log(B);


function compare (list1, list2){
    var i;
    var current1 = 0;
    var current2 = 0;

    for (i = 0; i < list1.length; i++){
        if (typeof list1[i] == "number"){
            current1 += list1[i];
        }
    }
    console.log(current1);

    for (i = 0; i < list2.length; i++){
        if (typeof list2[i] == "number"){
            current2 += list2[i];
        }
    }
    console.log(current2);
    
    return (current1 > current2 ? list1:list2);
 }

result = compare(A,B);

console.log(result);