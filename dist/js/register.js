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
    function Form_Authentication(){
        var box1b = $(".Account_box1b").find("input");
        //邮箱验证
        $(".Account_box1b").find("input").blur(function(){
            console.log(this.value);
            if(!this.value.length){
                $(".Account_box1b").find("input").css("background","pink").css("border","1px solid red");
                $(".Account_box1b1").css("color","red").html("这是一个必填字段");
            }else if(!(/\w+[@]{1}\w+[.]\w+/.test(this.value))){
                $(".Account_box1b").find("input").css("background","pink").css("border","1px solid red");
                $(".Account_box1b1").css("color","red").html("请输入正确的电子邮箱地址");
            }else{
                $(".Account_box1b").find("input").css("background","white").css("border","1px solid #5a5a5a");
                $(".Account_box1b1").css("color","green").html("恭喜，电子邮箱可以使用");
            }
                
            
        })
        //手机号验证
        $(".Account_box3b").find("input").blur(function(){
            console.log(this.value);
            if(!/^1[34578]\d{9}$/.test(this.value)){
                $(".Account_box3b").find("input").css("background","pink").css("border","1px solid red");
                $(".Account_box3b1").css("color","red").html("请输入正确的手机号");
            }else{
                $(".Account_box3b").find("input").css("background","white").css("border","1px solid #5a5a5a");
                $(".Account_box3b1").css("color","green").html("恭喜，手机号可以使用");
            }
        })
        //验证码验证
        $(".Account_box4b").find("input").blur(function(){
            console.log(this.value.length);
            if(!(this.value.length == 6)){
                $(".Account_box4b").find("input").css("background","pink").css("border","1px solid red");
                $(".Account_box4b1").css("color","red").html("请输入正确的验证码");
            }else{
                $(".Account_box4b").find("input").css("background","white").css("border","1px solid #5a5a5a");
                $(".Account_box4b1").css("color","green").html("恭喜，验证码可以使用");
            }
        })

        //密码验证
        $(".password_box1b").find("input").blur(function(){
            console.log(this.value.length);
            if(!/^[1-9a-zA-Z]{8,16}$/.test(this.value)){
                $(".password_box1b").find("input").css("background","pink").css("border","1px solid red");
                $(".password_box1b1").css("color","red").html("请输入正确的密码");
            }else{
                $(".password_box1b").find("input").css("background","white").css("border","1px solid #5a5a5a");
                $(".password_box1b1").css("color","green").html("恭喜，密码可以使用");
            }
        })
        //重复密码验证
        $(".password_box2b").find("input").blur(function(){
            console.log($(".password_box1b").find("input").val());
            console.log(this.value);
            if($(".password_box1b").find("input").val() != this.value){
                $(".password_box2b").find("input").css("background","pink").css("border","1px solid red");
                $(".password_box2b1").css("color","red").html("请输入正确的密码");
            }else{
                $(".password_box2b").find("input").css("background","white").css("border","1px solid #5a5a5a");
                $(".password_box2b1").css("color","green").html("两次密码一致");
            }
        })

    }
    return {
        navigation:navigation,
        headerNav:headerNav,
        Form_Authentication:Form_Authentication,
    }
})