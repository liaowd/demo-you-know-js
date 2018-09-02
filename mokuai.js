var MyModules = (function Manager() {
  var modules = {}

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    return modules[name]
  }
  return {
    define: define,
    get: get
  }
})()


require(['fun1','fun2'],function(fun1,fun2){

})
define('funNew',['fun1','fun2'],function(fun1,fun2){

})

(function(global){
  let modules={}
  let require=function(ids,impl){
    let reqs= []
    for(let i = 0;i<ids.length;i++){
      reqs[i]=modules[ids[i]]
    }
    impl.apply[impl,reqs]
  }
  let define = function(id,deps,impl){
    let depsFun=[]
    for(let i=0;i<deps.length;i++){
      depsFun[i] = require(deps[i])
    }
    modules[id]=impl.apply(impl,depsFun)
  }
  global.define=define
  global.require=require
  global.modules=modules
})(window)

define('hehe',[],function(){
  console.log('hehe')
})

modules