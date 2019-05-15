//Сеть фастфудов предлагает несколько видов гамбургеров:
//- маленький(50 тугриков, 20 калорий)
//- большой(100 тугриков, 40 калорий)
//Гамбургер может быть с одним из нескольких видов начинок:
//- сыром(+ 10 тугриков, + 20 калорий)
//- салатом(+ 20 тугриков, + 5 калорий)
//- картофелем(+ 15 тугриков, + 10 калорий)
//Можно добавить добавки:
//- посыпать приправой (+ 15 тугриков, 0 калорий)
//- полить майонезом (+ 20 тугриков, + 5 калорий).

//Напишите программу, расчитывающую стоимость и калорийность гамбургера.
//Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

//Пример работы кода:
// маленький гамбургер с начинкой из сыра
//var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//// добавка из майонеза
//hamburger.addTopping(Hamburger.TOPPING_MAYO);
//// спросим сколько там калорий
//console.log(“Calories: “ + hamburger.calculateCalories());
//// сколько стоит
//console.log("Price: “ + hamburger.calculatePrice());
//// я тут передумал и решил добавить еще приправу
//hamburger.addTopping(Hamburger.TOPPING_SAUCE);
//// А сколько теперь стоит?
//console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = []
    }

   static get SIZE_SMALL() {     
       return { price: 50, cal: 20}
    }

   static get SIZE_BIG() {
       return { price: 100, cal: 40 }
   }

   static get STUFFING_CHEESE() {
       return { price: 10, cal: 20 }
   }

   static get STUFFING_SALAD() {
       return { price: 20, cal: 5 }
   }

   static get STUFFING_POTATO() {
       return { price: 15, cal: 10 }
   }


   static get TOPPING_SAUCE() {
       return { price: 15, cal: 0}
   }

   static get TOPPING_MAYO() {
       return { price: 20, cal: 5 }
   }

    addTopping(toppings) {              
       return this.toppings.push(toppings);
   }

    calculateCalories() {
        let calories = 0;
        let calArr = [];            
        
        calArr = this.toppings.map(item => item.cal);             

        calArr.push(this.size.cal, this.stuffing.cal);        

        calories = calArr.reduce((sum, item) => {
            return sum + item;
        })

        return calories;
    }

    calculatePrice() {
        let price = 0;
        let priceArr = [];

        priceArr = this.toppings.map(item => item.price);

        priceArr.push(this.size.price, this.stuffing.price);        

        price = priceArr.reduce((sum, item) => sum + item);

        return price;
    }

}

let hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
console.dir(hamburger)

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice())

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('Price with sauce: ' + hamburger.calculatePrice());