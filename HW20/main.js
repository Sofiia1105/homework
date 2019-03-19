function C1(){};

function C2(){};

function C3(){}

C2.prototype = Object.create(C3.prototype);
C1.prototype = Object.create(C2.prototype);

C3.prototype.createList =  function (length){
    return this.list = new Array (length);
}

C2.prototype.fullList = function(from, to){
    for( var i = 0 ; i < this.list.length; i++){
        this.list[i] = Math.ceil(Math.random() * (to + 1 - from ) - to)
    }

    return this.list;
}

C1.prototype.renderList = function(){
    return this.list;
}

p = new C1;

console.log(p);
console.log(p.createList(10));
console.log(p.fullList(-9, 5));
console.log(p.renderList());