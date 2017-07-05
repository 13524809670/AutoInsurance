// jQuery方法换算
$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})

$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});



	// View_quotes.html页面
	// tab栏切换
	$('.nav_wrap a').click(function(){
		$(this).addClass('active').siblings('a').removeClass('active');
		if($('.nav_wrap a:eq(2) i').removeClass('fa-eye')){
			$('.nav_wrap a:eq(2) i').addClass('fa-eye-slash');
		}
	})
	
	// tab栏切换内容
	$('.nav_wrap a:eq(0)').click(function(){
		$("ul:eq(0)").css({display: 'block'}).siblings('ul').css({display: 'none'});
	})
	$('.nav_wrap a:eq(1)').click(function(){
		$("ul:eq(1)").css({display: 'block'}).siblings('ul').css({display: 'none'});
	})
	$('.nav_wrap a:eq(2)').click(function(){
		$("ul:eq(2)").css({display: 'block'}).siblings('ul').css({display: 'none'});
		$('.nav_wrap a:eq(2) i').addClass('fa-eye').removeClass('fa-eye-slash');
	})

	

	// quotes.html
	$(".initial").click(function(){
		$("input[type=text]").val('');
        $('#test2').parents('li').find('span').css('visibility','hidden');
        $('#test3').parents('li').find('span').css('visibility','hidden');
        $('#test4').parents('li').find('span').css('visibility','hidden');
        $('#test5').parents('li').find('span').css('visibility','hidden');
        $('#test6').parents('li').find('span').css('visibility','hidden');
        $('#test7').parents('li').find('span').css('visibility','hidden');
        $('#test9').parents('li').find('span').css('visibility','hidden');
        $('#test10').parents('li').find('span').css('visibility','hidden');
        $('#slideUp').slideUp();
	})
	$('#sub').click(function(){
        var date1 = $('#date1').val();
        var date2 = $('#date2').val();
        var test1 = $('#test1').val();
        var test2 = $('#test2').val();
        var test3 = $('#test3').val();
        var test4 = $('#test4').val();
        var test5 = $('#test5').val();
        var test6 = $('#test6').val();
        var test7 = $('#test7').val();
        var test8 = $('#test8').val();
        var test9 = $('#test9').val();
        var test10 = $('#test10').val();
        var test11 = $('#test11').val();

        if(date1==''&&date2==''&&test1==''&&test2==''&&test3==''&&test4==''&&test5==''&&test6==''&&test7==''&&test8==''&&test9==''&&test10==''&&test11==''){
            alert("请至少选择一个调整目标");
            return false;
        }
        self.location='quote_details.html'; 
    })
	


	// car_insurance.html	
	// 单选---验证
	$('#content #btn').change(function(){
    	if($('#btn').prop('checked')){
    		$('#submit').attr('disabled',false);
    		$('#submit').css('background','#0F8BE4');
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
			});
    	}
    	else{
    		$('#submit').attr('disabled',true);
    		$('#submit').css('background','#999');
    	}

  		//跳转下一页实现方法
		// window.location.href="add_info.html="+window.location.href; 
		// window.navigate("add_info.html"); 
		// window.open("add_info.html");
		// self.location='add_info.html'; 

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



	// quote_details.html
    $('.q_footer #btn').change(function(){
    	if($('#btn').prop('checked')){
    		$('#btna').attr('disabled',false);
    		$('#btna').css('background','#0F8BE4');
    		$('#btna').click(function(){
				self.location='confirm_order.html'; 
			});
    	}
    	else{
    		$('#btna').attr('disabled',true);
    		$('#btna').css('background','#999');
    	}
    })

	// confirm_order.html
	$('.m_wrap li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
	})



	// model_list.html
	$('.item #btn').change(function(){
    	if($('#btn').prop('checked')){
    		$('#submit').attr('disabled',false);
    		$('#submit').css('background','#0F8BE4');
    		$('#submit').click(function(){
				self.location='View_quotes.html'; 
			});
    	}
    	else{
    		$('#submit').attr('disabled',true);
    		$('#submit').css('background','#999');
    	}
    })




    // land.html
    $('.btn_wrap #btn_a').click(function(){
        self.location='car_insurance.html';
    })
})

