var Mouse 	= require("./mouse");
var Cat 	= require("./cat");

var cat = new Cat('Tom','blue');
var mouse = new Mouse('Jerry','orange');

cat.eat(mouse);

console.log(cat);

console.log(cat.sayHi());