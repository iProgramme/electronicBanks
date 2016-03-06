 $(function() {
//     //响应式关闭菜单
     /*window.onresize=function(){
        $(".pad_nav,.main_pad_menu_bg").hide(100);
     }*/

     /**手机导航****/
     $(".pad_nav").find(".first_menu").find("p").click(function(){
         $(this).parent().toggleClass("first_menu_active");
         $(this).siblings(".second_menu_wrap").toggleClass("disN");
         $(this).siblings(".second_menu_wrap").find(".second_menu").last().addClass("second_last_menu");
     })
     $(".second_menu").find("p").click(function(){
         $(this).siblings(".third_menu_wrap").toggleClass("disN");
         $(this).siblings(".third_menu_wrap").find(".third_menu").last().addClass("second_last_menu");
     })


    $('.main_pad_menu_bg').click(function(){

        $(".pad_nav,.main_pad_menu_bg").hide(100);
        $(".main_pad_menu_bg").css({'zIndex':-990});
        $(".main").animate({"right" : "0px"},{duration:100,complete:"",easing:"easeInOutCubic"});
        $('.nav_2').removeClass('nav_2_current');
    });
//   //响应式显示菜单
     $(".nav_2").click(function(){
        var nav_width2=$(document).height();
        $(".main_pad_menu_bg").css("height",nav_width2);
        $(".pad_nav,.main_pad_menu_bg").show(300);
        $(".main").css({"position":"absolute"})
        $(".main").animate({"right" : "0px"},{duration:300,complete:"",easing:"easeInOutCubic"});
        $('.nav_2').addClass('nav_2_current');
        /**改变**/
       $('.header_phone').css({'zIndex':99});
       $(".main_pad_menu_bg").css({'zIndex':990});
   });
 });
//
//
//
//
//
//
//
//
//
//
//
