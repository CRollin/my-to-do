montageDefine("fdb8edb","lib/ProxyHandler",{dependencies:["./"],factory:function(e,t,n){n.exports=r;var r=function(e){this._cbs=e||{}},i=e("./").EVENTS;Object.keys(i).forEach(function(e){if(0===i[e])e="on"+e,r.prototype[e]=function(){this._cbs[e]&&this._cbs[e]()};else if(1===i[e])e="on"+e,r.prototype[e]=function(t){this._cbs[e]&&this._cbs[e](t)};else{if(2!==i[e])throw Error("wrong number of arguments");e="on"+e,r.prototype[e]=function(t,n){this._cbs[e]&&this._cbs[e](t,n)}}})}});