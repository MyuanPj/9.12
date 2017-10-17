  //输入框正则验证
$(function(){
$('#txtName').blur(function(){
    var re1 = /^1[3-8]\d{9}$/;
    var re2 = /^[1-9a-zA-Z][\w]+@[a-z0-9]+(\.[a-z]+){1,3}$/;
    var re3 = /^[\u4e00-\u9fa5]{2,4}$/;
    var value = $('#txtName').val();
//     if(re1.test(value) == false){
//         if(re2.test(value) == false) {
//             if(re3.test(value) == false) {
//                    $('.txt-span1').text('请输入正确的账号');
//                     $('.txt-span1').css('color','red'); 
//             }
//         }else {
//             $('.txt-span1').text('账号输入正确');
//             $('.txt-span1').css('color','green');
//         }
//     }else {
//               $('.txt-span1').text('账号输入正确');
//                $('.txt-span1').css('color','green');
//         }
//

if(re1.test(value)) {
    $('.txt-span1').text('账号输入正确');
    $('.txt-span1').css('color','green');
}else {
    if(re2.test(value)) {
        $('.txt-span1').text('账号输入正确');
        $('.txt-span1').css('color','green');
    }else {
        if(re3.test(value)) {
            $('.txt-span1').text('账号输入正确');
            $('.txt-span1').css('color','green');
        } else {
            $('.txt-span1').text('请输入正确的账号');
            $('.txt-span1').css('color','red'); 
        }
    }
}
 })
$('#txtPassword').blur(function(){
    var re =/^\d{6,12}$/;
    var value = $('#txtPassword').val();
    if(re.test(value)){
        $('.txt-span2').text('密码输入正确');
        $('.txt-span2').css('color','green');
    }else{
        $('.txt-span2').text('请输入正确的密码');
        $('.txt-span2').css('color','red');
    }
});
})


// 小方块点击大狗和取消
$(function(){
    var onOff = true;
    $(".other-fn .check-box b").click(function(){
        console.log(123 );
        if(onOff){ 
               $(this).css("backgroundPosition","-24px -21px");
               
        }else {
            $(this).css("backgroundPosition","-24px 0px");
        }
     onOff = !onOff;
        
    });
})


// 小三角
$(function () {
    var onOff=true;
    $(".more").click(function () {

        $("#div-h").fadeToggle(500);

        
        if(onOff){
            $(".sj").css("borderColor","transparent transparent #f43499 transparent");
            $(".sj").css("verticalAlign","2px")
            $(".sj").css("border-style","dashed dashed solid dashed")   
        }else{
            $(".sj").css("borderColor","#f43499 transparent transparent transparent");
            $(".sj").css("verticalAlign","-2px")
            $(".sj").css("border-style","solid dashed dashed dashed")
        }
        onOff=!onOff;
    });
})


$(function(){
    $(".more>a").mouseenter(function () {
        $(this).css("color","#f43499");
        $(".sj").css("borderColor","#f43499 transparent transparent transparent");
        $(".sj").css("verticalAlign","-2px");
        $(".sj").css("border-style","dashed dashed solid dashed");
    });
    $(".more>a").mouseleave(function () {
        $(this).css("color","");
        $(".sj").css("borderColor","#666 transparent transparent transparent");
        $(".sj").css("verticalAlign","-2px");
        $(".sj").css("border-style","solid dashed dashed  dashed");
    });
})

