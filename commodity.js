define(["jquery"],function($){
    //侧边导航
    function navigation(){
        $("#sidebar").find(".sidebar_d1").mouseenter(function(){
            $(".sidebar_e").css("display","block").mouseenter(function(){
            })
        }).mouseleave(function(){
            $(".sidebar_e").css("display","none")
        })
        $("#sidebar").find(".sidebar_d2").mouseenter(function(){
            $(".sidebar_f").css("display","block")
        }).mouseleave(function(){
            $(".sidebar_f").css("display","none")
        })
        $("#sidebar").find(".sidebar_d3").mouseenter(function(){
            $(".sidebar_g").css("display","block")
        }).mouseleave(function(){
            $(".sidebar_g").css("display","none")
        })
        $("#sidebar").find(".sidebar_d4").mouseenter(function(){
            $(".sidebar_h").css("display","block")
        }).mouseleave(function(){
            $(".sidebar_h").css("display","none")
        })
    }
    function Commodity_switch(){
        $("#banner").find("a").click(function(){
            return false;
        })
        $(".banner_nav").find(".banner_nav1 a").click(function(){
            $(".banner_val1").show();
            $(".banner_val2,.banner_val3,.banner_val4").hide();
            $(".banner_nav1 a").css("color","#0199d5")
            $(".banner_nav2 a,.banner_nav3 a,.banner_nav4 a").css("color","#000000")
        })
            $(".banner_nav").find(".banner_nav2 a").click(function(){
            $(".banner_val2").show();
            $(".banner_val1,.banner_val3,.banner_val4").hide();
            $(".banner_nav2 a").css("color","#0199d5")
            $(".banner_nav1 a,.banner_nav3 a,.banner_nav4 a").css("color","#000000")
        })
            $(".banner_nav").find(".banner_nav3 a").click(function(){
            $(".banner_val3").show();
            $(".banner_val2,.banner_val1,.banner_val4").hide();
            $(".banner_nav3 a").css("color","#0199d5")
            $(".banner_nav2 a,.banner_nav1 a,.banner_nav4 a").css("color","#000000")
        })
            $(".banner_nav").find(".banner_nav4 a").click(function(){
            $(".banner_val4").show();
            $(".banner_val2,.banner_val3,.banner_val1").hide();
            $(".banner_nav4 a").css("color","#0199d5")
            $(".banner_nav2 a,.banner_nav3 a,.banner_nav1 a").css("color","#000000")
        })
    }
    function headerNav(){
        $("#header_nav").find(".header_nav1,.header_div1").mouseenter(function(){
            $("#header_nav").find(".header_div1").show();
            $(".header_nav1").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div1").hide();
            $(".header_nav1").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav2,.header_div2").mouseenter(function(){
            $("#header_nav").find(".header_div2").show();
            $(".header_nav2").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div2").hide();
            $(".header_nav2").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav3,.header_div3").mouseenter(function(){
            $("#header_nav").find(".header_div3").show();
            $(".header_nav3").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div3").hide();
            $(".header_nav3").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav4,.header_div4").mouseenter(function(){
            $("#header_nav").find(".header_div4").show();
            $(".header_nav4").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div4").hide();
            $(".header_nav4").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav5,.header_div5").mouseenter(function(){
            $("#header_nav").find(".header_div5").show();
            $(".header_nav5").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div5").hide();
            $(".header_nav5").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav6,.header_div6").mouseenter(function(){
            $("#header_nav").find(".header_div6").show();
            $(".header_nav6").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div6").hide();
            $(".header_nav6").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav7,.header_div7").mouseenter(function(){
            $("#header_nav").find(".header_div7").show();
            $(".header_nav7").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div7").hide();
            $(".header_nav7").css("color","#5a5a5a");
        })

        $("#header_nav").find(".header_nav9,.header_div9").mouseenter(function(){
            $("#header_nav").find(".header_div9").show();
            $(".header_nav9").css("color","#0199d5")
        }).mouseleave(function(){
            $("#header_nav").find(".header_div9").hide();
            $(".header_nav9").css("color","#5a5a5a");
        })
    }
        function click_down(){
            var i = 1;
            var j = 1;
            var k = 1;
            var l = 1;
            var m = 1;
                $("#mian_left2").click(function(){
                    i++
                if(i % 2 == 0){
                    $("#mian_left2").css("border","none").find(".mian_left2s").show()
                    $("#mian_left2").find(".mian_left2h").hide()
                    $("#mian_left2_val").show();
                }else{
                    $("#mian_left2").css("borderBottom","1px solid #cccccc").find(".mian_left2s").hide()
                    $("#mian_left2").find(".mian_left2h").show()
                    $("#mian_left2_val").hide();
                }
    
                })
                $("#mian_left3").click(function(){
                    j++
                if(j % 2 == 0){
                    $("#mian_left3").css("border","none").find(".mian_left2s").show()
                    $("#mian_left3").find(".mian_left2h").hide()
                    $("#mian_left3_val").show();
                }else{
                    $("#mian_left3").css("borderBottom","1px solid #cccccc").find(".mian_left2s").hide()
                    $("#mian_left3").find(".mian_left2h").show()
                    $("#mian_left3_val").hide();
                }
    
                })
                $("#mian_left4").click(function(){
                    k++
                if(k % 2 == 0){
                    $("#mian_left4").css("border","none").find(".mian_left2s").show()
                    $("#mian_left4").find(".mian_left2h").hide()
                    $("#mian_left4_val").show();
                }else{
                    $("#mian_left4").css("borderBottom","1px solid #cccccc").find(".mian_left2s").hide()
                    $("#mian_left4").find(".mian_left2h").show()
                    $("#mian_left4_val").hide();
                }
    
                })
                $("#mian_left5").click(function(){
                    l++
                if(l % 2 == 0){
                    $("#mian_left5").css("border","none").find(".mian_left2s").show()
                    $("#mian_left5").find(".mian_left2h").hide()
                    $("#mian_left5_val").show();
                }else{
                    $("#mian_left5").css("borderBottom","1px solid #cccccc").find(".mian_left2s").hide()
                    $("#mian_left5").find(".mian_left2h").show()
                    $("#mian_left5_val").hide();
                }
    
                })
                $("#mian_left6").click(function(){
                    m++
                if(m % 2 == 0){
                    $("#mian_left6").css("border","none").find(".mian_left2s").show()
                    $("#mian_left6").find(".mian_left2h").hide()
                    $("#mian_left6_val").show();
                }else{
                    $("#mian_left6").css("borderBottom","1px solid #cccccc").find(".mian_left2s").hide()
                    $("#mian_left6").find(".mian_left2h").show()
                    $("#mian_left6_val").hide();
                }
    
                })
           
            
        }
    
    return {
        navigation:navigation,
        Commodity_switch:Commodity_switch,
        headerNav:headerNav,
        click_down:click_down
    }
})