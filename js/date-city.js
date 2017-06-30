window.onload=function(){
	// 城市滑动
    var area1 = new LArea();
    area1.init({
        'trigger': '#city', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#value1', //选择完毕后id属性输出到该位置
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    area1.value=[1,15,3];//控制初始位置，注意：该方法并不会影响到input的value


    // 日历滑动
	var calendar = new lCalendar();
	calendar.init({
		'trigger': '#date',
		'type': 'date'
	});


	//修改取消切换
	var span = document.querySelector('form li #link');
	var v = document.querySelectorAll('form li input[type=text]');
	// console.log(v);
	span.onclick=function(){
		for(var i=0;i<v.length;i++){
			v[i].value='';
		}
		if(span.innerHTML=='修改'){
			span.innerHTML='取消';

		}else{
			span.innerHTML='修改';
		}
	};
}