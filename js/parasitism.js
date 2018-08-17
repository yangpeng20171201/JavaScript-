//声明基对象
function inheritObject(o){
	//声明一个过渡函数
	function F(){}
	//过渡对象的原型继承父对象
	F.prototype = o;
	return new F();
}
var book = {
	name:'js book',
	alikeBook:['css book','html book']
}
function createBook(obj){
	//通过原型继承方式创建对象
	var o = new inheritObject(obj);
	//拓展新对象
	o.getName = function(){
		console.log(this.name);
	};
	//返回拓展后的新对象
	return o;
}