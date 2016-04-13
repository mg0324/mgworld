/*完成布局的初始化，依赖jquery*/
var _mm = {

};
jQuery.fn.extend({
    mgMenu : function(options){
       var defaults = {
	
       }
       var option = $.extend(defaults,options);

       //_ml.path = option.path;
       var userAgent = navigator.userAgent;
       var isOpera = userAgent.indexOf("Opera") > -1;
       var _height_ = 40;
       if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera){
              _height_ = 50;
       }
       //内部初始化
       $(".mg_menu").css({
              width : 150,
              height : $(window).height() - _height_ - $("#mg_left_bottom").height()
       });
       return $(this);
    }
});