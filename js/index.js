// jQuery方法换算
$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.2 + "px"});
})

$(function(){
	$('html').css({'font-size':$(window).width()/3.2 + "px"});



	// View_quotes.html页面
	// tab栏切换内容
	$('.nav_wrap a:eq(0)').click(function(){
		$("ul:eq(0)").css({display: 'block'}).siblings('ul').css({display: 'none'});
	})
	$('.nav_wrap a:eq(1)').click(function(){
		$("ul:eq(1)").css({display: 'block'}).siblings('ul').css({display: 'none'});
	})
	$('.nav_wrap a:eq(2)').click(function(){
		$("ul:eq(2)").css({display: 'block'}).siblings('ul').css({display: 'none'});
	})


	// tab栏切换变色
	$('.nav_wrap a').click(function(){
		$(this).addClass('active').siblings('a').removeClass('active');
	})


	// 点击恢复初始方案
	$(".initial").click(function(){
		$("input[type=text]").val('');
	})
	

	// $('ul li #test1').click(function(){
	// 	$('#slideUp').slideUp();
	// })


	// $('#test1').click(function(){
	// 	var a;
	// 	var b = $('#test1').val('投保');
	// 	var c = $('#test1').val('不投保');

	// 	var b = $('#test1').text('投保');
	// 	var c = $('#test1').text('不投保');

	// 	var b = $('#test1').html('投保');
	// 	var c = $('#test1').html('不投保');
	// 	if(a == b){
	// 		$('#slideUp').slideUp();
	// 		console.log(10000);
	// 	}
	// 	else if(a == c){
	// 		$('#slideUp').slideDown();
	// 		return false;
	// 		console.log(22222);
	// 	}

	// 	var a = $('#test1').html();
	// 	if(a == "投保"){
	// 		console.log(1111);
	// 	}
	// })
	
		


	// car_insurance.html	
	$('#submit').click(function(){
		var city = $('#city').val();
		var num = $('#number').val();
		var txt = $('#text').val();
		var name = $('#name').val();
		var lic = $('#license').val();
		var date = $('#date').val();
		
		if(city == ''){
			alert('城市不能为空');
			return false;
		}
		if(num == ''){
			alert('车牌号码不能为空');
			return false;
		}
		if(txt == ''){
			alert('车主车辆信息不能为空');
			return false;
		}
		if(name == ''){
			alert('车主姓名不能为空');
			return false;
		}
		if(lic == ''){
			alert('身份证号码不能为空');
			return false;
		}
		if(date == ''){
			alert('过户日期不能为空');
			return false;
		}

		self.location='add_info.html'; 

		// window.location.href="add_info.html="+window.location.href; 
		// window.navigate("add_info.html"); 
		// window.open("add_info.html");

		// 无验证直接加载页面
		// <input type="button" value="为爱车投保" id="submit" onClick="location.href='add_info.html'">
	});


	// shipping_address.html
	$('#back').click(function(){
        // 验证信息
        var name = $('#name').val();
        var phone = $('#phone').val();
        var area = $('#area').val();
        
        if(name == ''){
            alert('姓名不能为空');
            return false;
        }
        if(phone == ''){
            alert('电话不能为空');
            return false;
        }
         if(area == ''){
            alert('所在地区不能为空');
            return false;
        }
        self.location='confirm_order.html'; 
    });



	// modify_info.html
	$('#subtn').click(function(){
        // 验证信息
        var model = $('#model').val();
        var code = $('#code').val();
        var num = $('#number').val();
        var dare = $('#date').val();
        if(model == ''){
            alert('车辆品牌型号不能为空');
            return false;
        }
        if(code == ''){
            alert('车辆识别代号不能为空');
            return false;
        }
        if(num == ''){
            alert('发动机号码不能为空');
            return false;
        }
        if(date == ''){
            alert('注册日期不能为空');
            return false;
        }
       
        self.location='model_list.html'; 
    });
})

