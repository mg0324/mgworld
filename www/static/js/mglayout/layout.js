/*完成布局的初始化，依赖jquery*/
var _ml = {
	path : '',//项目相对路径
	width : 200,//默认左边宽200px
	bgcolor : '#fff',//默认白色背景
	hide : true, //隐藏按钮
	btnwidth : 20, //按钮宽度
	copyright : '梦<br/>网<br/>出<br/>品<br/> ＊<br/>２<br/>０<br/>１<br/>６<br/>' //rn标示换行
};
jQuery.fn.extend({
    mgLayout : function(options){
       var defaults = {
			path : '/static/js/mglayout',
			width : "200",
			bgcolor : '#fff',
			hide : true
       }
       var option = $.extend(defaults,options);

       _ml.path = option.path;
       _ml.width = option.width;
       _ml.bgcolor = option.bgcolor;
       _ml.hide = option.hide;
       //内部初始化
       ////主要完成布局的width，height随分辨率的自适应
       //左侧样式渲染
       $("#mg_left").css({
			'height' : $(window).height(),
			'width' : _ml.width,
			'background' : _ml.bgcolor,
			'padding-right' : _ml.btnwidth + 10
		});
       //主页面布局
       $("#mg_main").css({
       		left : _ml.width,
       		position : "absolute",
       		width : $(window).width() - _ml.width + 15,
       		height : $(window).height()
       });
       //隐藏功能
       if(_ml.hide){
       		var left_btn = $("<img src='"+_ml.path+"/img/left.png' flag='toleft' class='mg_hide-btn' title='折叠'/>");
       		left_btn.css({
       			"width" : _ml.btnwidth,
       			"cursor" : 'pointer'
       		}).on("click",function(){
       			var flag = $(this).attr("flag");
       			var changeWidth = _ml.width - _ml.btnwidth - 10;
       			if(flag == "toleft"){
       				//折叠
	       			$("#mg_left").animate({  
	       				left : "-=" + changeWidth
					  }, "fast" );
	       			$(this).attr("src",$(this).attr("src").replace("left","right"))
	       			.attr("flag","toright").attr("title","展开");
	       			//右侧区域
	       			$("#mg_main").animate({  
	       				left : "-=" + changeWidth,
	       				width : '+=' + changeWidth
					  }, "fast" );
	       			//去掉nicescroll
	       			$("#ascrail2000").hide();
	       			$(".mg_copyright").show();
       			}else if(flag == "toright"){
       				//展开
       				$("#mg_left").animate({  
	       				left : "+=" + changeWidth
					  }, "fast" );
       				$(this).attr("src",$(this).attr("src").replace("right","left"))
       				.attr("flag","toleft").attr("title","折叠");
       				//右侧区域
	       			$("#mg_main").animate({  
	       				left : "+=" + changeWidth,
	       				width : '-=' + changeWidth
					  }, "fast" );
	       			$("#ascrail2000").show();
	       			$(".mg_copyright").hide();
       			}
       			
       		});

       		var _copyright = $("<span class='mg_copyright'>"+_ml.copyright+"</span>");
       		var btn_div = $("<div id='mg_btn_div'></div>");
       		btn_div.append(left_btn).css({
       			"position" : "absolute",
       			"z-index" : 1000,
       			"top" : 10,
       			'left' : _ml.width - _ml.btnwidth - 5
       		});
       		btn_div.append(_copyright);
       		$("#mg_left").append(btn_div);
       }
       return $(this);
    }
});