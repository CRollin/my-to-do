var Montage=require("./core").Montage,logger=require("./logger").logger("exception"),Exception=exports.Exception=Montage.specialize({message:{value:null},target:{value:null},method:{value:null},constructor:{value:function(){this.super()}},initWithMessage:{enumerable:!0,value:function(e){return this.initWithMessageTargetAndMethod(e,null,null)}},initWithMessageAndTarget:{enumerable:!0,value:function(e,t){return this.initWithMessageTargetAndMethod(e,t,null)}},initWithMessageTargetAndMethod:{enumerable:!0,value:function(e,t,n){return this.message=e!==void 0?e:null,Object.defineProperty(this,"message",{writable:!1}),this.target=t!==void 0?t:null,Object.defineProperty(this,"target",{writable:!1}),this.method=n!==void 0?n:null,Object.defineProperty(this,"method",{writable:!1}),this}},toString:{enumerable:!1,value:function(){return"Exception: "+(null!==this.message?this.message+" ":null)+(null!==this.target?this.target+" ":null)+(null!==this.method?this.method+" ":null)}}});