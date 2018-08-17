// .构造函数继承，即在子类构造函数中利用call()更改作用域，将子类变量在父类中执行一遍，从而完成继承。该继承方式只能继承父类构造函数中的属性和方法，并不能直接继承到父类原型。
function SuperClass(id,books){
	this.id = id;
	this.books = ['JS','JAVA'];
}
SuperClass.prototype.showBooks = function(){
	return this.books;
}
function SubClass(id,books){
	SuperClass.call(this,id,books)
}
var sub = new SubClass();
sub.books.push('CSS');
console.log(sub.books); //['JS','JAVA','CSS']
var sub1 = new SubClass('superClass');
console.log(sub1.books); //['JS','JAVA']
console.log(sub.showBooks()); //Uncaught TypeError: sub.showBooks is not a function