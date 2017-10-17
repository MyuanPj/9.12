var clothesBox = $1('#clothes-box');
var clothesBig = $1('.clothes-big');
var oScreen = $1('.screen');
var Img = $1('img', clothesBox);
var aBox = $1('.box');
var oAmp = $1('amp');
var oWarn = $1('warn');
var k = 0;

for(var i = 0; i < aBox.length; i++) {
	aBox[i].index = i;

	aBox[i].onclick = function() {
		k = this.index;
		for(var i = 0; i < aBox.length; i++) {
			Img[i].style.display = 'none';
		}
		Img[this.index].style.display = 'block';
		
		getBig(k);
		return false;
	}
}
getBig(0);
//===================================================
//放大镜效果
function getBig(k){
	clothesBox.onmouseover = function() {
			clothesBig[k].style.display = 'block';
			clothesBig[k].onmousemove = function(ev) {
				ev = ev || event;
				var x = ev.pageX - clothesBox.offsetLeft - oScreen[k].offsetWidth - oScreen[k].offsetWidth / 2;
				var y = ev.pageY - clothesBox.offsetTop - oScreen[k].offsetHeight - oScreen[k].offsetHeight / 2;
				x = x < 0 ? 0 : x;
				x = x > clothesBox.offsetWidth - oScreen[k].offsetWidth ? clothesBox.offsetWidth - oScreen[k].offsetWidth : x;
				y = y < 0 ? 0 : y;
				y = y > clothesBox.offsetHeight - oScreen[k].offsetHeight ? clothesBox.offsetHeight - oScreen[k].offsetHeight : y;
				oScreen[k].style.left = x + 'px';
				oScreen[k].style.top = y + 'px';
				clothesBig[k].style.backgroundPosition = -x * 2.4 + 'px ' + -y * 2.6 + 'px';
			}
			clothesBox.onmouseout = function() {
				clothesBig[k].style.display = 'none';
			}
		}
}
oAmp.onmouseover = function() {
	clothesBig[0].style.display = 'none';
}
oAmp.onmouseout = function() {
	clothesBig[0].style.display = 'block';
}
oWarn.onmouseover = function() {
	clothesBig[0].style.display = 'none';
}
oWarn.onmouseout = function() {
	clothesBig[0].style.display = 'block';
}
//==========================================================
//尺码小助手

$("#close").click(function() {
	$("#bigbig").fadeOut(500);
	$("#divHelp").fadeOut(500);
})
$("#shSmall").click(function() {
	$("#bigbig").fadeIn(500);
	$("#divHelp").fadeIn(500);
})
//==========================================================
//分享到移出效果
var oLine = $1('#line');
var oQwp = $1('#qwp');
var oShare = $1('#share');
var oXiaLa = $1('#xiala');
oShare.onmouseover = function() {
	oLine.style.display = 'block';
	oQwp.style.display = 'block';
	this.style.backgroundColor = '#FFF';
	oXiaLa.style.borderColor = '#fff #fff #C2C2C2 #fff';
	oXiaLa.style.marginBottom = 5 + 'px';
}
oShare.onmouseout = function() {
	oLine.style.display = 'none';
	oQwp.style.display = 'none';
	this.style.backgroundColor = '#FAFAFA';
	oXiaLa.style.borderColor = '#C2C2C2 #fff #fff #fff';
	oXiaLa.style.marginBottom = 0;
}
//==========================================================
//倒计时
function getDownTime() {
	var willTime = new Date('2017-11-06 00:00:00');
	var nowTime = new Date();
	var t = willTime.getTime() - nowTime.getTime();

	if(t > 0) {
		var d = Math.floor(t / 1000 / 60 / 60 / 24);
		var h = Math.floor(t / 1000 / 60 / 60 % 24);
		var m = Math.floor(t / 1000 / 60 % 60);
		var s = Math.floor(t / 1000 % 60);
		var ms = Math.floor(t % 1000 / 100);
	}

	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	var timeD = document.getElementById('time-d');
	var timeH = document.getElementById('time-h');
	var timeM = document.getElementById('time-m');
	var timeS = document.getElementById('time-s');
	var timeMs = document.getElementById('time-ms');
	timeD.innerHTML = '距离抢购：' + d + '天';
	timeH.innerHTML = h + '时';
	timeM.innerHTML = m + '分';
	timeS.innerHTML = s + '秒';
	timeMs.innerHTML = '.' + ms;
}
setInterval(function() {
	getDownTime();
}, 1);
//==========================================================
//尺码样式
$(".sizeLi").click(function(){
	for(var i = 0;i<$(".sizeLi").length;i++){
		$(".sizeLi").removeClass("clickLi");
		$(".spanChecked").hide();
	}
	$(this).addClass("clickLi");
	$(".spanChecked").eq($(this).index()).show();
})

//========================================================
//尺码表显示
var aSizeLi = $1(".sizeLi");
var aSizeSTable = $1(".sizeStable")
for(var i = 0; i < aSizeLi.length; i++) {
	aSizeLi[i].index = i;
	aSizeLi[i].onmouseover = function() {
		for(var i = 0; i < aSizeLi.length; i++) {
			aSizeSTable[i].style.display = 'none';
		}
		aSizeSTable[this.index].style.display = 'block';
	}
	aSizeLi[i].onmouseout = function() {
		aSizeSTable[this.index].style.display = 'none';
	}
}
//==========================================================
//计价器判断数量
var oDown = $1('#down');
var oUp = $1('#up');
var oNum = $1('#num');
var oJs = $1('#jianshu')
var k = 1;
oDown.onclick = function() {
	if(k <= 1) {
		oNum.innerHTML = '1';
		k = 1;
		this.style.background = "url(images/jl.png) no-repeat " + 0 + "px " + -150 + "px";
	} else {
		k--;
		oNum.innerHTML = k;
	}
}
oUp.onclick = function() {
	oDown.style.background = "url(images/jl.png) no-repeat " + -100 + "px " + -150 + "px";
	if(k >= oJs.innerHTML) {
		oNum.innerHTML = oJs.innerHTML;
	} else {
		k++;
		oNum.innerHTML = k;
	}
}
//========================================================
//详情列表跳转
var docTop1 = $("#proSize").offset().top;
var docTop2 = $("#spzx").offset().top;
var docTop3 = $("#aboutUs").offset().top;
$("#aboutOur>ul>li").eq(0).click(function(){
	$("body,html").animate({
			scrollTop:docTop1 - 110
		},800);
})
$("#aboutOur>ul>li").eq(1).click(function(){
	$("body,html").animate({
			scrollTop:docTop2 - 110
		},800);
})
$("#aboutOur>ul>li").eq(2).click(function(){
	$("body,html").animate({
			scrollTop:docTop3 - 110
		},800);
})
console.log($("#aboutOur>ul>li"))
//========================================================
//退货框显示
var oserP = $1("#ser-p");
var oService = $1("#service-in");
oserP.onmouseover = function() {
	oService.style.display = "block";
}
oserP.onmouseout = function() {
	oService.style.display = "none";
}
//========================================================
//固定广告显示
var oFixImg = $1('#fixed-img');

document.onscroll = function() {
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop
	var x = scrollT;
	if(x > 800) {
		oFixImg.style.display = 'block';
	}
	if(x < 800) {
		oFixImg.style.display = 'none';
	}
}
//=============================================================
//侧边图片 
$("#sildImg").animate({
	top: 200,
	opacity: 1
}, 200, "elasticIn");

$(window).scroll(function(e) {
	var scroll = $(window).scrollTop()	
	var topH = $("#top").height();
	scroll >= topH?$("#sildImg").stop().animate({
			top: 50
		}):$("#sildImg").stop().animate({
			top: 200
		})
})
//============================================================
//显示关于我们
var positionNum  = 0;
var important = 0;
var oLiSpanTop = $1("#li-span-top");
var aliSpanLi = $1("li",$1("#li-span"));
var aliSpanSpan = $1("span",$1("#li-span"));
for(var i=0;i<aliSpanLi.length;i++){
	aliSpanLi[i].index =i;	
	aliSpanLi[i].onclick = function(){
		positionNum = this.index;
		important = this.index;
		for(var i = 0;i<aliSpanLi.length;i++){
			oLiSpanTop.style.backgroundPositionY = 0;
			aliSpanSpan[i].style.backgroundPositionY = 0;
		}
	oLiSpanTop.style.backgroundPositionY = -240-positionNum * 80 +"px";
	aliSpanSpan[positionNum].style.backgroundPosition = -positionNum*60+"px " +-120+"px";
}
	aliSpanLi[i].onmouseover = function(){
		positionNum = this.index;
		aliSpanSpan[positionNum].style.backgroundPosition = -positionNum*60+"px " +-120+"px";
	}	
	aliSpanLi[i].onmouseout = function(){
		positionNum = this.index;
		if(positionNum != important){
			aliSpanSpan[positionNum].style.backgroundPosition = -positionNum*60+"px " +0;
		}		
	}
}

//=============================================================
//底部轮播图
var oNext =$1("#next");
var oPrev = $1("#prev");
var oUl = $1("ul",$1("#wflb"))[0];
var tar = $1("img",$1("#wflb"))[0].offsetWidth;
oNext.onclick = function(){	
		move(oUl,"left",30,-tar);
}
oPrev.onclick = function(){	
		move(oUl,"left",30,0);
}

//===============================================================
//身高体重判断表
var aInp = $1("input",$1("#mySize-fr-top"));
var aSpan =$1("span",$1("#mySize-fr-top"));
for(var i = 0;i<aInp.length;i++){
	aInp[i].index = i
	aInp[i].onmouseover = function(){		
		for(var i = 0;i<aInp.length;i++){
			aInp[i].style.borderColor = "#b2b2b2";
		}
		this.style.borderColor = "grey";
	}
	//身高
aInp[i].onfocus = function(){
	aSpan[this.index].style.display = "block";
}
aInp[i].onblur = function(){
	aSpan[this.index].style.display = "none";
	}
	
}
//=================================================
//吸顶效果
var navCenter = $("#aboutOur").offset().top;
$(window).on('scroll',function(){
	var scroll = $("html").scrollTop();
	if(scroll>=(navCenter - 40)){
		$("#aboutOur").addClass("fixed");
	}else {
		$("#aboutOur").removeClass("fixed");
	}
});



(function (window) {
    function MagTop(ele) {
        this.ele = ele;
        this.newBox = document.createElement("div");
        this.newBox.style.width = this.ele.style.width;
        this.newBox.style.height = "40px";
        this.newBox.style.display = "none";
        this.ele.parentNode.insertBefore(this.newBox, this.ele);
        bind(window, "scroll", this.scroll.bind(this));
        // window.onscroll = this.scroll.bind(this);
    }
    MagTop.prototype.scroll = function (e) {
        e = e || event;
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollT > 129) {
            this.ele.style.position = "fixed";
            this.ele.style.top = 0 + "px";
            this.ele.style.zIndex = 10000;
            this.ele.style.width = "100%";
            this.newBox.style.display = "block";
        } else {
            this.ele.style.position = "";
            this.newBox.style.display = "none";
        }
    }
    window.MagTop = MagTop;
})(window);
var oMagTop = new MagTop(document.getElementsByTagName("nav")[0]);

// ====固定定位=======
$("#rel").mouseover(function(){
    $("#rel3").fadeIn()
    $(this).hide()
$("#rel4").html("返回顶部")
})

;(function (window) {
    var timerMain = null;
    function goTop () {
        var target = 0;
        var speed = 0;
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        clearInterval(timerMain);
        timerMain = setInterval(function () {
            if (document.documentElement.scrollTop) {
                speed = (target - document.documentElement.scrollTop) * 0.05;
                // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (parseInt(document.documentElement.scrollTop * speed / Math.abs(speed)) < parseInt(target * speed / Math.abs(speed))) {
                    document.documentElement.scrollTop = document.documentElement.scrollTop + speed;
                } else {
					clearInterval(timerMain);
					$("#rel3").fadeOut();
					$("#rel").show();
                }
            } else if (document.body.scrollTop) {
                speed = (target - document.body.scrollTop) * 0.05;
                // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (parseInt(document.body.scrollTop * speed / Math.abs(speed)) < parseInt(target * speed / Math.abs(speed))) {
                    document.body.scrollTop = document.body.scrollTop + speed;
                } else {
					clearInterval(timerMain);
					$("#rel3").fadeOut();
					$("#rel").show();
                }
            }
        }, 1)
        return false;
    }
    window.goTop = goTop;
})(window);
document.getElementById("rel4").onclick = goTop;
document.getElementById("rel4").style.cursor = "pointer";