function SuperMath() {
    this.check = function (obj) {
        var result = confirm("Do matematical operation znak with x and y?")

        if (result == true) {

            if (typeof obj == 'object' && !isNaN(obj.x) && !isNaN(obj.y)) {
                return this[obj.znak](obj.x, obj.y);
            }

        } else {
           return  this.input();            
        }        
    }
}

SuperMath.prototype.input = function () {
        var re = /[+\-\*\/\%>=]/;

        do {
            obj.x = +prompt("Enter number x");
        } while (isNaN(obj.x));

        do {
            obj.y = +prompt("Enter number y");
        } while (isNaN(obj.y));

        do {
            obj.znak = prompt("Enter znak");
        } while (obj.znak.search(re) == -1); 

        return this[obj.znak](obj.x, obj.y);  
}

SuperMath.prototype['='] = function (x, y) {
    return x == y ? true : false;
}

SuperMath.prototype['>'] = function (x, y) {
    return x > y ? true : false;
}

SuperMath.prototype['+'] = function (x, y) {
    return x + y;
}

SuperMath.prototype['-'] = function (x, y) {
    return x - y;
}

SuperMath.prototype['/'] = function (x, y) {
    return x / y;
}

SuperMath.prototype['*'] = function (x, y) {
    return x * y;
}

SuperMath.prototype['%'] = function (x, y) {
    return x % y;
}

//-------------------------------------

obj = {
    x: 12,
    y: 3,
    znak: '>'
};

p = new SuperMath;
console.log(p.check(obj));