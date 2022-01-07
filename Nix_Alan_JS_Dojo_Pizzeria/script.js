// function pizzaOven(crustType, sauceType, Cheeses, Toppings){
// var pizza = {};
// pizza.crustType = crustType;
// pizza.sauceType = sauceType;
// pizza.Cheeses   =   Cheeses;
// pizza.Toppings = Toppings;
// return pizza
// }
// var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
// console.log(pizza1)
// var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(pizza2)
// var pizza3 = pizzaOven("thin", "traditional", ["chedder","parmesan"], ["pepperoni", "bacon"])
// console.log(pizza3)
// var pizza4 = pizzaOven("traditional", "alfrado", ["mozzarella"], ["chicken", "bacon"])
// console.log(pizza4)
function randomPizzaOven(){
    var crusts = ["hand tossed","thin","traditional","deep dish"]
    var sauces = ["traditional", "marinara", "alfrado"]
    var cheese = ["mozzarella", "feta", "parmesan", "chedder"]
    var topping = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "chicken"]
    var pizza = {};
    var tempCheese = []
    var tempToppings = []
    pizza.crustType = crusts[Math.floor(Math.random() * 4)];
    pizza.sauceType = sauces[Math.floor(Math.random() * 3)];
    for(var i = 0; i <= Math.floor(Math.random() * 2); i++){
    tempCheese[i] = cheese[Math.floor(Math.random() * 4)];
    pizza.cheeses = tempCheese
    };
    for(var j = 0; j <= Math.floor(Math.random() * 3); j++){
        console.log(j)
        tempToppings[j] = topping[Math.floor(Math.random() * 7)];
        console.log(tempToppings)
        pizza.topping = tempToppings
        };
        return pizza
}
var pizza5 = randomPizzaOven()
console.log(pizza5)