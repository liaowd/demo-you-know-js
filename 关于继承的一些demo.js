function foo(name) {
  console.log(this.a);
  this.name = name
}
var a = 2;
(function () {
  "use strict";
  foo();
})()



function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
} 
Bar.prototype = Object. create( Foo.prototype);
Bar.prototype.myLabel=function(){
  return this.label; 
}; 
var a = new Bar( "a", "obj a" ); 
a. myName(); // "a" 
a.myLabel(); // "obj a"

// ==============================
// 另外一种继承？？？？？
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}
Bar.prototype = new Foo()        //副作用，Foo里可能会有其他功能执行

Bar.prototype.myLabel=function(){
  return this.label; 
}; 
var a = new Bar( "a", "obj a" ); 
a. myName(); // "a" 
a.myLabel(); // "obj a"



// =============================
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}
Object.setPrototypeOf(Bar.prototype,Foo.prototype)

Bar.prototype.myLabel=function(){
  return this.label; 
}; 
var a = new Bar( "a", "obj a" ); 
a. myName(); // "a" 
a.myLabel(); // "obj a"