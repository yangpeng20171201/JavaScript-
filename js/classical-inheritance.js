// 类式继承，既子类原型继承父类实例化。但是当我利用new关键字实例化子类的时候，
//当我改变子类继承到父类属性的时候，会污染到再次实例化的子类它所继承到的属性。
function SuperClass(){
	this.superValue = true;
	this.languages= ['JS','JAVA'];
}
SuperClass.prototype.getSuperValue = function(){
	return this.superValue;
}
function SubClass(){
	this.subValue = false;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function(){
	return this.subValue;
}
var sub = new SubClass();
console.log(sub.getSuperValue());
console.log(sub.getSubValue());
console.log(sub instanceof SuperClass); //true
console.log(sub instanceof SubClass);	//true
console.log(SubClass instanceof SuperClass); //false
console.log(SubClass.prototype instanceof SuperClass); //true
console.log(sub.languages) //['JS','JAVA']
sub.languages.push('HTML');
var sub1 = new SubClass();
console.log(sub1.languages); //['JS','JAVA','HTML']