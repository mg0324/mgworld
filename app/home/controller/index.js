'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
    console.log("默认的入口1");
    return this.display("home");
  },

  mgAction: function(self){
  	//获取参数并写入模板
  	let a = this.get("a");
  	let b = this.get("b");
  	var obj = {
  		"a" : a,
  		"b" : b
  	};
  	this.assign("obj",obj);
    return this.display("mg");
  }

  
});