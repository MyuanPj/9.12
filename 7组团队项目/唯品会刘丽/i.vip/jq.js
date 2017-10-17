// ===========closeButton==========
$("#closeButton").click(function () {
    $("#headB").slideUp("slow");
    $("#closeButton").hide();
})
// ========== leader / 样式=========
$("#leader1> li:odd").css({
    "fontSize": "12px",
    "color": "#D0D0D0"
})

// ==========轮播图=============

$("#show").mouseover(function () {
    // 鼠标移到show上。dir会显示
    $("#dir").show();
    $("#dir1").show();
})

$("#show").mouseout(function () {
    // 鼠标移到show上。dir会显示
    $("#dir").hide();
    $("#dir1").hide();
})

// 当鼠标移到dir上时，颜色会变深


var timer = null;
var k = 0;
// console.log( $("#img>li"));
// 包装定时器，让图片自己轮播
function autoPlay() {
    timer = setInterval(function () {
        k++;
        console.log(k);
        if (k >= $("#img>li").length) {
            k = 0;
        } else {
            $("#img>li").eq(k).stop().show().siblings().stop().hide();

            // 同时小圆圈也会显示颜色
            $("#circle>li").eq(k).css("backgroundColor", "#ED1173").siblings().css("backgroundColor", "");

        }
    }, 1500)
}
autoPlay();

$("#show").mouseover(function () {
    clearInterval(timer);
    timer = null;
})
// 当鼠标滑过小圆圈时，也会显示出相应的img
$("#circle>li").mouseover(function () {
    autoPlay();
})

// 当鼠标点击dir时，会显示出相对应的img
$("#dir>a").click(function () {
    $(this).addClass(".deep");
})

// =============buy===============
// 鼠标移上时，图片的border会发生改变，变成红色
$("#buy1 li").mouseover(function(){   
    $(this).css("border","1px solid #ED1173")
})
// 鼠标移开时，红色边框会消失
$("#buy1 li").mouseout(function(){   
    $(this).css("border","")
})

// =========查看更多============
$("#exchange li").eq(2).children().mouseover(function () {
    // 鼠标移上时，会出现颜色改变，并且有下划线
    $(this).addClass("under");
})
$("#exchange li").eq(2).children().mouseout(function () {
    // 鼠标移上时，会出现颜色改变，并且有下划线
    $(this).removeClass("under");
})


// ================开抢日期=============
// 鼠标移上时，li背景色改变
// console.log($("#seckill2-1 ul li:even"));
$("#seckill2-1 ul li:even").mouseover(function(){
    $(this).addClass("deepPink");
    
})
// 移开时，背景色消失
$("#seckill2-1 ul li:even").mouseout(function(){
    $(this).removeClass("deepPink");
    $("#seckill2-1 ul li:eq(0)").removeClass("deepPink");
})


// ==================秒杀规则===========
$("#rule1 li").eq(0).children().mouseover(function () {
    $(this).css("border-bottom", "1px dotted #252525");
})


$("#rule1 li").eq(2).children().mouseover(function () {
    $(this).css("border-bottom", "1px dotted #1D94D1")
})

$("#rule1 li").eq(0).children().mouseout(function () {
    $(this).css("border-bottom", "");
})

$("#rule1 li").eq(2).children().mouseout(function () {
    $(this).css("border-bottom", "");
})

// ================关于我们================
// console.log($("#aboutUs ul li:even()"));
$("#aboutUs li:even()").mouseover(function(){
    $(this).css("color","#CCCCCC").siblings().css("color","");
})
$("#aboutUs li:even()").mouseout(function(){
    $(this).css("color","");
})
// =============span颜色==========
// 当鼠标移到span身上时，显示红色
$("#footer1-4 span").mouseover(function(){
    $(this).css("color","#D7237E").siblings().css("color","");
})
$("#footer1-4 span").mouseout(function(){
    $(this).css("color","");
})
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

// 设置定时器，让图片自己播放
var timer = null;
var k = 0;
function autoPlay(){
    timer=setInterval(function(){
    k++;
    // console.log(k);
    if(k>$("#img li").length-1){
        k=0;

        $("#img li").eq(k).fadeIn().siblings().fadeOut();
        $("#circle li").eq(k).css("backgroundColor","#F10582").siblings().css("backgroundColor","");
    }else{
        $("#img li").eq(k).fadeIn().siblings().fadeOut();
        $("#circle li").eq(k).css("backgroundColor","#F10582").siblings().css("backgroundColor","");
    }
},1500)
}
autoPlay();
