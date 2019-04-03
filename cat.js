function Cat(name,color){
	this.name = name;
	this.color = color;
	this.stomach = [];
}		
Cat.prototype.eat = function (Mouse){
	this.stomach.push(Mouse);	
}

module.exports = Cat;
