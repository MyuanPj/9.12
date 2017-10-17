
///============================轮播图================================
(function () {
    function lunBo() {
        //鼠标以上,让左右arr显示出来
        $("#box1").mouseenter(function () {
            // $("#arr-l").css("left",0);
            // $("#arr-r").css("right",0);
            $("#arr-l").animate({ left: 0, opacity: 1 }, 200);
            $("#arr-r").animate({ right: 0, opacity: 1 }, 200);
            // clearInterval(timer);
            // timer = null;
        })
        $("#box1").mouseleave(function () {
            // $("#arr-l").css("left",-30);
            // $("#arr-r").css("right",-30);
            $("#arr-l").animate({ left: -30, opacity: 0 }, 200);
            $("#arr-r").animate({ right: -30, opacity: 0 }, 200);
            // timer = setInterval(autoplay, 2000);
        })
        var timer = null;
        // 声明一个变量
        var k = 1;
        //将第一张图片克隆一份放到ul的最后面
        $("#ul").append($("#ul .show-1").clone());
        //将最后一张图片克隆一份放置在ul的最前面
        $("#ul").prepend($("#ul ul").eq($("#ul ul").length - 2).clone());
        console.log($("#ul ul"));
        var ulWidth = $("#ul ul").outerWidth();
        //初始化,点开页面的最开始让第一张图片显示
        $("#ul").css("left", -k * ulWidth);
        //实现功能点击右侧arr,向左侧滑动
        // console.log(ulWidth)
        $("#arr-r").click(function () {
            k++; 
            $("#ul").animate({ left: -k * ulWidth }, 1000,function(){

                if (k >= $("#ul ul").length - 1) {
                    k = 1;
                    $("#ul").css("left", -k * ulWidth);
                    //   $("#ul").animate({left:-k*ulWidth},1000);  
                }
            });
        })

        //点击左侧arr  实现向右侧滑动
        $("#arr-l").click(function () {
            k--;
      
            $("#ul").animate({ left: -k * ulWidth }, 1000,function(){

                if (k < 1) {
                    k = $("#ul ul").length - 2;
                    $("#ul").css("left", -k * ulWidth);
                    // $("#ul").animate({left:-k*ulWidth},1000);  
                }
            });
        })
        // 开定时器,让它自己跑动起来
        // timer = setInterval(autoplay, 2000);


        // function autoplay() {

        //     k++;

        //     // $("#ul").css("left",-k*ulWidth);  
        //     $("#ul").animate({ left: -k * ulWidth }, 2000,function(){

        //         if (k >= $("#ul ul").length - 1) {
        //             k = 1;
        //             $("#ul").css("left", -k * ulWidth);
        //         }
        //     });
        // }
    }
    lunBo();

})();




// =========导航栏固定==============================================
(function () {
    function Nav1() {
        //现货区顶部的距离
        // console.log($("#nav").outerHeight());
        var topH = $("#top").outerHeight() + $("#header").outerHeight();
        $(window).scroll(function () {
            var scrollT = $("html").scrollTop();
            if (scrollT >= topH) {
                $("#nav").addClass("fixed");
                $("#header").css("margin-bottom", $("#nav").outerHeight());

            } else {
                $("#nav").removeClass("fixed");
                $("#header").css("margin-bottom", 0);

            }
        })



    }
   
    Nav1();
})();
// ==============================选项栏点击添加类=================================
(function () {
    function add_Class() {
        var oMid = document.getElementById("mid");
        var aLi = oMid.getElementsByTagName("li");
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].onclick = function () {
                for (var j = 0; j < aLi.length; j++) {
                    aLi[j].className = "";
                }
                this.className = 'cur-b';
            }
        }

        var oBtm = document.getElementById("btm");
        var oLi = oBtm.getElementsByTagName("li");
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].onclick = function () {
                for (var j = 0; j < oLi.length; j++) {
                    oLi[j].className = "";
                }
                this.className = 'cur-b';
            }
        }
    }
 
    add_Class();
})(window);

//================定时器功能-=========================================================
(function () {
    function Timer_l() {
        var timer = null;
        //获取现在的时间
        var now = new Date();
        //结束的时间
        var end = new Date(2017, 9, 16);
        //获取时间差
        var t = end - now;
        //或酸单位
        t = t / 1000;
        if (t > 0) {
            var d = Math.floor(t / 60 / 60 / 24);
            var h = Math.floor(t / 60 / 60 % 24);
            var m = Math.floor(t / 60 % 60);
            var s = Math.floor(t % 60);
        }
        d = d < 10 ? "0" + d : d;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        var oTimer = document.getElementById("Timer");
        oTimer.innerHTML = '剩余' + d + ' 天 ' + h + '小时' + m + '分' + s + '秒';
        timer = setInterval(function () {
            Timer_l();
        }, 1000)
    }
   
    Timer_l();
})();


//======================固定定位小盒子的跳动=======================================
(function () {
    function Discn() {
        $("#discounts").finish().animate({
            top: 80,
            opacity: 1
        }, 2000, "elasticOut");
    }
    Discn();
})();

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
