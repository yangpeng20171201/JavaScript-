/**
 * 寄生式继承 继承原型
 * 传递参数 subClass 子类
 * 传递参数 superClass 父类
 */
function inheritObject(o){
	//声明一个过渡函数
	function F(){}
	//过渡对象的原型继承父对象
	F.prototype = o;
	return new F();
}
function inheritPrototype(subClass,superClass){
	//复制一份父类的原型副本保存在变量
	var p = inheritObject(superClass.prototype);
	//修正因为重写子类原型导致子类的constructor指向父类
	p.constructor = subClass;
	//设置子类的原型
	subClass.prototype = p;
}
//定义父类
function SuperClass(name){
	this.name = name;
	this.colors = ['red','blue'];
}
//定义父类原型方法
SuperClass.prototype.getName = function(){
	return this.name;
}
//定义子类
function SubClass(name,time){
	//构造函数继承
	SuperClass.call(this,name);
	//子类新增属性
	this.time = time;
}
//寄生式继承父类原型
inheritPrototype(SubClass,SuperClass);
//子类新增原型方法
SubClass.prototype.getTime =function(){
	return this.time;
}
var test1 = new SubClass('js book',2014);
var test2 = new SubClass('csc book',2013);
test1.colors.push('black');
console.log(test1.colors); //['red','blue','black']
console.log(test2.colors); //['red','blue']
console.log(test2.getName());
console.log(test2.getTime());