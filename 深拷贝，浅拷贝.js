var obj1={
  name:'obj1',
  key1:1,
  key2:{
    name:'key2',
    key3:{
      hehe:4
    }
  }
}

// 浅拷贝
var obj2=Object.assign({},obj1)

// for in 会遍历对象原型上的属性