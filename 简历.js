window.onload = function() {
	function $(id) {
		return document.getElementById(id);
	}
	//	主体框架
	var li1 = $("box").getElementsByClassName("a");
	//		导航栏li
	var li2 = $("dh3").getElementsByTagName("li");
	//      导航栏span
	var jdt = $("dh3").getElementsByTagName("span");
	console.log(jdt);
	var target = 0,
		leader = 0,
		time = null;
	//  页面剪刀动画
	var span1 = $("jd1").getElementsByTagName("span");
	console.log(span1);
	var span2 = $("jd2").getElementsByTagName("span");
	var span3 = $("jd3").getElementsByTagName("span");
	var span4 = $("jd4").getElementsByTagName("span");

	//      页面整体布局
	for(i = 0; i < li1.length; i++) {
		li2[i].index = i;
		li2[i].onclick = function() {
				clearInterval(time);
				target = li1[this.index].offsetTop;
				console.log(target);
				var time = setInterval(function() {
					if(leader > target - 1 && leader < target + 1) {
						console.log(leader);
						clearInterval(time);
					} else {
						leader = leader + (target - leader) / 10;
						window.scrollTo(0, leader);
					}

				}, 30)
			}
			//		   导航栏动画效果
		li2[i].onmouseover = function() {
			for(i = 0; i < li2.length; i++) {
				li2[i].style.color = "white";
			}
			jdt[this.index].style.transform = "translateX(" + 100 + "px)";
			jdt[this.index].style.transition = "all 0.5s ease 0s";
			li2[this.index].style.color = "lightskyblue"
		}
		li2[i].onmouseout = function() {
			jdt[this.index].style.transform = "translateX(" + 0 + "px)";
			jdt[this.index].style.transition = "all 0.5s ease 0s";
		}
	}
	//     自我介绍部分
	var js1 = $("jieshao").getElementsByTagName("li");
	$("touxiang").onmouseover = function() {
		$("tishi").style.display = "none";

		$("ifthings").style.display = "block";
		var i = -1;
		var time = setInterval(function() {
			i = i + 1;
			js1[i].style.display = "block";
			if(i == 4) {
				clearInterval(time);
			}
		}, 60)
//		li1[0].style.transform = "scale(" + 1.3 + "," + 1.3 + ")";
//		li1[0].style.transition = "all 0.5s ease 0s";
//		var time5 = setTimeout(function() {
//			li1[0].style.transform = "scale(" + 1.0 + "," + 1.0 + ")";
//			li1[0].style.transition = "all 0.5s ease 0s";
//			clearTimeout(time5);
//		}, 500)
	}
	var time1 = setInterval(function() {
		var i = 3;
		var time2 = setInterval(function() {
			i--;
			//	   console. log(i);
			span1[i].style.transform = "translateX(" + -300 + "px)";
			span1[i].style.transition = "all 2s linear 0s";
			span2[i].style.transform = "translateX(" + -300 + "px)";
			span2[i].style.transition = "all 2s linear 0s";
			span3[i].style.transform = "translateX(" + -300 + "px)";
			span3[i].style.transition = "all 2s linear 0s";
			span4[i].style.transform = "translateX(" + -300 + "px)";
			span4[i].style.transition = "all 2s linear 0s";
			if(i == 0) {
				clearInterval(time2);
			}
			$("jiandao1").style.transform = "translateX(" + -900 + "px)";
			$("jiandao1").style.transition = "all 6s linear 0s";
			$("jiandao2").style.transform = "translateX(" + -900 + "px)";
			$("jiandao2").style.transition = "all 6s linear 0s";
			$("jiandao3").style.transform = "translateX(" + -900 + "px)";
			$("jiandao3").style.transition = "all 6s linear 0s";
			$("jiandao4").style.transform = "translateX(" + -900 + "px)";
			$("jiandao4").style.transition = "all 6s linear 0s";
		}, 2000);
		for(j = 0; j < span1.length; j++) {
			span1[j].style.transform = "translateX(" + 0 + "px)";
			span1[j].style.transition = "all 0s linear 0s";
			span2[j].style.transform = "translateX(" + 0 + "px)";
			span2[j].style.transition = "all 0s linear 0s";
			span3[j].style.transform = "translateX(" + 0 + "px)";
			span3[j].style.transition = "all 0s linear 0s";
			span4[j].style.transform = "translateX(" + 0 + "px)";
			span4[j].style.transition = "all 0s linear 0s";
		}
		$("jiandao1").style.transform = "translateX(" + 0 + "px)";
		$("jiandao1").style.transition = "all 0s linear 0s";
		$("jiandao2").style.transform = "translateX(" + 0 + "px)";
		$("jiandao2").style.transition = "all 0s linear 0s";
		$("jiandao3").style.transform = "translateX(" + 0 + "px)";
		$("jiandao3").style.transition = "all 0s linear 0s";
		$("jiandao4").style.transform = "translateX(" + 0 + "px)";
		$("jiandao4").style.transition = "all 0s linear 0s";

	}, 8000);
	//  导航栏横线制作
	//	$("zxh").onmouseover = function() {

	var time1 = setTimeout(function() {
			$("tishi").style.transform = "translateX(" + 100 + "px)";
			$("tishi").style.transition = "all 1s ease 0s";
			clearTimeout(time1);
		}, 1000)
		//	}
		//	$("zxh").onmouseout = function() {
		//		$("tishi").style.display = "none";
		//		$("tishi").style.transform = "translateX(" + 0 + "px)";
		//	}

	//      屏幕滚动事件
	window.onscroll = function() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
				document.body.scrollTop || 0;
			var juli = li1[1].offsetTop - 1;

			if(scrollTop >= juli) {
				$("dh2").className = "fixed1";
				for(i = 0; i < li2.length; i++) {
					li2[i].style.transform = "rotateZ(" + -90 + "deg)";
				}
			} else {
				$("dh2").className = "";
				for(i = 0; i < li2.length; i++) {
					li2[i].style.transform = "rotateZ(" + 0 + "deg)";
				}
			}
			for(var i = 0; i < li1.length - 1; i++) {

				//	     var juli = li1[i].offsetTop;
				console.log(juli);
				//	
				if((scrollTop > li1[i].offsetTop) && (scrollTop < li1[i + 1].offsetTop)) {
					console.log(scrollTop);

					for(j = 0; j < li2.length; j++) {
						li2[j].style.color = "white";
					}
					li2[i].style.color = "lightskyblue";

				} else if(scrollTop > li1[4].offsetTop - 10) {

					for(j = 0; j < li2.length; j++) {
						li2[j].style.color = "white";
					}
					li2[4].style.color = "lightskyblue";
				}
			}
		}
		//	饼状图
	var speed = 1 / 30 * Math.PI;
	var Q = 1.8 * Math.PI;
	var Q2 = 1.6 * Math.PI;
	var Q3 = 1.8 * Math.PI;
	var Q4 = 1.8 * Math.PI;
	var Q5 = 1.8 * Math.PI;
	var Q6 = 1.8 * Math.PI;
	var time = 20;
	createQuaCircle("svg1");
	doAnimation(Q, "svg1", speed, time);
	showText("svg1", "JS  90%", "18");
	doAnimation(Q2, "svg2", speed, time);
	showText("svg2", "CSS 80%", "18");
	doAnimation(Q3, "svg3", speed, time);
	showText("svg3", "HTML 90%", "18");
	doAnimation(Q4, "svg4", speed, time);
	showText("svg4", "JQury 90%", "18");
	doAnimation(Q5, "svg5", speed, time);
	showText("svg5", "Css3 90%", "18");
	doAnimation(Q6, "svg6", speed, time);
	showText("svg6", "C 90%", "18");
	//表单验证
	var regname = /^[\u4e00-\u9fa5]{2,}$/;
	var regEmail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
	var regNumber = /^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$/;

	function check(input, reg) {
		input.onblur = function() {
			if(reg.test(this.value)) {
				this.nextElementSibling.innerText = "正确";
				this.nextElementSibling.style.color = "green";
			} else {
				this.nextElementSibling.innerText = "错误";
				this.nextElementSibling.style.color = "red";
			}
		}
	}
	check($("inputname"), regname);
	check($("inputemail"), regEmail);
	check($("inputnumber"), regNumber);
	//console.log($("inputnumber"));
}