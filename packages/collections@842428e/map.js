"use strict";function Map(e,t,n,i){return this instanceof Map?(t=t||Object.equals,n=n||Object.hash,i=i||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=i,this.store=new Set(void 0,function(e,n){return t(e.key,n.key)},function(e){return n(e.key)}),this.length=0,this.addEach(e),void 0):new Map(e,t,n,i)}var Shim=require("./shim"),Set=require("./set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes");module.exports=Map,Map.Map=Map,Object.addEach(Map.prototype,GenericCollection.prototype),Object.addEach(Map.prototype,GenericMap.prototype),Object.addEach(Map.prototype,PropertyChanges.prototype),Map.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},Map.prototype.log=function(e,t,n,i){t=t||this.logNode,this.store.log(e,function(e,n,i){t(e.value.value,n,i)},n,i)},Map.prototype.logNode=function(e,t){t(" key: "+e.key),t(" value: "+e.value)};