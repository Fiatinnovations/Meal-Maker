const menu = {
  _courses : {
  _appetizers: [],
  _mains : [],
  _desserts :[],
get appetizers () {
  return this._appetizers;
},
  set appetizers (appetizerIn) {
    this._appetizers = appetizerIn ;
  },
  get main () {
  return this._mains;
},
  set main (mainIn) {
    this._mains = mainIn;
  },
    get dessert () {
  return this._desserts;
},
  set dessert (dessertIn) {
    this._desserts = dessertIn;
  },
  },
  
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains:this._courses.mains,
      dessert:this._courses.dessert
    };
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
 const dish = {
   name: dishName,
   price:dishPrice
 };
    this._courses[courseName].push(dish);
     },
  
  getRandomDishFromCourses(courseName){
  const dishes = this._courses[courseName];
    
  var index = Math.floor(Math.random()*dishes.length);
  return dishes[index];

},
  
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourses('appetizers');
    const main = this.getRandomDishFromCourses('main');
    const dessert = this.getRandomDishFromCourses('dessert');
    totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is $${totalPrice}`
  }

    
  };

menu.addDishToCourse('appetizers', 'Salad', 4.25);
menu.addDishToCourse('appetizers', 'chips', 5.25);
menu.addDishToCourse('appetizers', 'crispy', 4.25);

menu.addDishToCourse('main', 'rice', 10.25);
menu.addDishToCourse('main', 'Beans', 4.25);
menu.addDishToCourse('main', 'Vegetable', 4.25);

menu.addDishToCourse('dessert', 'cake', 4.25);
menu.addDishToCourse('dessert', 'cream', 4.25);
menu.addDishToCourse('dessert', 'Tuna', 4.25);


let myMeal = menu.generateRandomMeal();
console.log(myMeal);
   
