var chalk = require('chalk');

function Cat(name,color){
	this.name = name;
	this.color = color;
	this.stomach = [];
}		
Cat.prototype.eat = function (Mouse){
	this.stomach.push(Mouse);	
}
Cat.prototype.sayHi = function (){
	console.log('Hi I am ' + chalk.blue(this.name));
}
module.exports = Cat;
