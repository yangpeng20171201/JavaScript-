function SuperClass(name){
	this.name = name;
	this.books = ['JS','JAVA'];
}
SuperClass.prototype.getName = function(){
	return this.name;
}
function SubClass(name,time){
	SuperClass.call(this,name);
	this.time = time;
}
SubClass.prototype = new SuperClass('superClass');
SubClass.prototype.getTime = function(){
	return this.time;
}
var sub = new SubClass('superClass');
sub.books.push('CSS');
console.log(sub.books); //['JS','JAVA','CSS']
console.log(sub.getName()); //superClass
var sub1 = new SubClass('superClass');
console.log(sub1.books); //['JS','JAVA']