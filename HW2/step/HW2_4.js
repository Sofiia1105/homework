a = +prompt('enter a', '');

do{
    b = +prompt('enter b', '');
}while(a>b);

h = +prompt('step', '');

var sum = 0;
for (i = a; i <= b; i += h) {
    var fact = 1;

    for (j = i; j != 1; j--) {
        fact = fact * j;
    }

    sum = sum + fact;
}

console.log(sum)