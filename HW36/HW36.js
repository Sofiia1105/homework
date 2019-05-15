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

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice())

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('Price with sauce: ' + hamburger.calculatePrice());