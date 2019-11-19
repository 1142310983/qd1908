define(["jquery"],function($){
            function pull_down1(){

                //笔记本二合一电脑导航
                $(".nav_left").on("mouseenter","#laptop .laptop_a,#laptop #laptop_val",function(){
                    $("#laptop .laptop_a").css("border-bottom","3px solid #0096d6").css("color","#0096d6");
                    $("#laptop #laptop_val").show();
                    
                })
                $(".nav_left").on("mouseleave","#laptop .laptop_a,#laptop #laptop_val",function(){
                    $("#laptop .laptop_a").css("color","#5a5a5a").css("border","none");
                    $("#laptop #laptop_val").hide();
                })

                //台式电脑导航
                $(".nav_left").on("mouseenter","#desktop .desktop_a,#desktop #desktop_val",function(){
                    $("#desktop .desktop_a").css("border-bottom","3px solid #0096d6").css("color","#0096d6");
                    $("#desktop #desktop_val").show();
                })
                $(".nav_left").on("mouseleave","#desktop .desktop_a,#desktop #desktop_val",function(){
                    $("#desktop .desktop_a").css("color","#5a5a5a").css("border","none");
                    $("#desktop #desktop_val").hide();
                })

                //打印机导航
                $(".nav_left").on("mouseenter","#print .print_a,#print #print_val",function(){
                    $("#print .print_a").css("border-bottom","3px solid #0096d6").css("color","#0096d6");
                    $("#print #print_val").show();
                })
                $(".nav_left").on("mouseleave","#print .print_a,#print #print_val",function(){
                    $("#print .print_a").css("color","#5a5a5a").css("border","none");
                    $("#print #print_val").hide();
                })

                //商务解决方案导航
                $(".nav_left").on("mouseenter","#business .business_a,#business #business_val",function(){
                    $("#business .business_a").css("border-bottom","3px solid #0096d6").css("color","#0096d6");
                    $("#business #business_val").show();
                })
                $(".nav_left").on("mouseleave","#business .business_a,#business #business_val",function(){
                    $("#business .business_a").css("color","#5a5a5a").css("border","none");
                    $("#business #business_val").hide();
                })

                //支持导航
                $(".nav_left").on("mouseenter","#support .support_a,#support #support_val",function(){
                    $("#support .support_a").css("border-bottom","3px solid #0096d6").css("color","#0096d6");
                    $("#support #support_val").show();
                })
                $(".nav_left").on("mouseleave","#support .support_a,#support #support_val",function(){
                    $("#support .support_a").css("color","#5a5a5a").css("border","none");
                    $("#support #support_val").hide();
                })
            }
            //加载导航和banner图数据
            function navData(){
                $.ajax({
                    url:"../json/index.json",
                    success:function(obj){
                        var navBanner = obj.banner
                        var str = ``;
                        // console.log(navBanner);
                        //获取banner图
                        for(var i = 0; i < navBanner.length; i++){
                            if(i == 0){
                                str = $(`<li><a href="${navBanner[i].url}"><img src="${navBanner[i].img}" alt=""></a></li>`);
                                str.appendTo($("#banner ul"))
                            }else{
                                str = $(`<li><img src="${navBanner[i].img}" alt=""></li>`);
                                str.appendTo($("#banner ul"))
                            }
                        }
                        var navArr = obj.topNav;
                        var nav = navArr[0].childs;
                        var nav1 = navArr[1].childs;
                        var nav2 = navArr[2].childs;
                        var nav3 = navArr[6].childs;
                        var nav4 = navArr[7].childs;
                        //获取下拉数据
                        for(var i = 0;i < nav.length; i++ ){
                            str = $(`<li><a href="">${nav[i].content}</a></li>`)
                            str.appendTo($("#laptop_val ul"))
                        }
                        for(var i = 0;i < nav1.length; i++ ){
                            str = $(`<li><a href="">${nav1[i].content}</a></li>`)
                            str.appendTo($("#desktop_val ul"))
                        }
                        for(var i = 0;i < nav2.length; i++ ){
                            str = $(`<li><a href="">${nav2[i].content}</a></li>`)
                            str.appendTo($("#print_val ul"))
                        }
                        for(var i = 0;i < nav3.length; i++ ){
                            str = $(`<li><a href="">${nav3[i].content}</a></li>`)
                            str.appendTo($("#business_val ul"))
                        }
                        for(var i = 0;i < nav4.length; i++ ){
                            str = $(`<li><a href="">${nav4[i].content}</a></li>`)
                            str.appendTo($("#support_val ul"))
                        }
                    }
                })
            }
            //banner图切换
            function bannerTab(){
                var timer = null;
                var time = null;
                var iNow = 0; 
                var startBtn = $("#play").find(".start")
                var pauseBtn = $("#play").find(".pause")
                 //进度条
                
                var pro=0;
                //定时函数进行更新
                    time=setInterval(function(){
                        //进度改变
                        pro++;
                        $("#progress_fill").animate({
                            width:(pro +"%")
                        },0);
                        //控制更新
                        if(pro ==100){
                            //清除定时器，停止更新
                            pro = 0;
                        }
                    },70);

                $("#play").on("click","#play_ul li",function(){
                    iNow = $("#play_ul li").index();
                    
                })

                timer = setInterval(function(){
                    iNow++;
                    tab();
                    $("progress_fill").css("width","")
                },5000)
                var aBtns = $("#play").find("ol").find("li");
                    aBtns.click(function(){
                        clearInterval(timer)
                        clearInterval(time)
                        iNow = $(this).index();
                        pro=0;
                        tab()
                    timer = setInterval(function(){
                        iNow++;
                        tab();
                    },5000);
                    time=setInterval(function(){
                        //进度改变
                        pro++;
                        $("#progress_fill").animate({
                            width:(pro +"%")
                        },0);
                        //控制更新
                        if(pro ==100){
                            //清除定时器，停止更新
                            pro = 0;
                        }
                    },70);
                    pauseBtn.show();
                    startBtn.hide();
                })
                
                    startBtn.click(function(){
                        clearInterval(timer);
                        clearInterval(time);
                        pauseBtn.show();
                        startBtn.hide();
                        pro = ($("#progress_fill").width() / $(document).width()) * 100;
                        //alert(pro);
                        timer = setInterval(function(){
                            iNow++;
                            tab(); 
                        },5000)
                        time=setInterval(function(){
                            //进度改变
                            pro++;
                            $("#progress_fill").animate({
                                width:(pro +"%")
                            },0);
                            //控制更新
                            if(pro >=100){
                                //清除定时器，停止更新
                                pro = 0;
                            }
                        },70);
                    })  
                    pauseBtn.click(function(){
                        startBtn.show();
                        pauseBtn.hide();
                        pro = $("#progress_fill").width();
                        clearInterval(timer);
                        clearInterval(time);
                    })    

                function tab(){
                    var aImgs = $("#banner #banner_ul ").find("li");
                    var aBors = $("#banner ").find(".banner_bor");
                    var aBtns = $("#play ol").find("li");

                    aBors.css("opacity",0.2).hide().eq(iNow).show().animate({
                        opacity:1
                    },800,function(){
                        if(iNow == aBors.size() - 1){
                            iNow = -1;
                        }
                    })

                    aImgs.css("opacity",0.2).hide().eq(iNow).show().animate({
                        opacity:1
                    },800,function(){
                        if(iNow == aBtns.size() - 1){
                            iNow = -1;
                        }
                    })

                    aBtns.removeClass("active").eq(iNow).addClass("active")

                }
                
                
            } 
           
            function navSeach(){
                // alert($("#query").css("height"))
                var i = 1;
                $("#nav_search").click(function(){
                    i++
                    
                    if((i % 2) == 0){
                        $("#query").animate({"height":100},300).show()
                    
                    }else{
                        $("#query").animate({"height":0},300,function(){
                            $("#query").hide()
                        })
                    }    
                })    
            }
            //按钮改变样式
            function bannerHover(){
                
                $("#banner_bor1_left").mouseenter(function(){
                    $("#banner_bor1_left").css("background","#075782").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor1_left").css("background","#0171ad").css("transition-duration","0.5s");
                })
                $("#banner_bor1_right").mouseenter(function(){
                    $("#banner_bor1_right").css("background","#0171ad").css("color","#ffffff").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor1_right").css("background","#ffffff").css("color","#0096d6").css("transition-duration","0.5s");
                })

                $("#banner_bor2_left").mouseenter(function(){
                    $("#banner_bor2_left").css("background","#075782").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor2_left").css("background","#0171ad").css("transition-duration","0.5s");
                })
                $("#banner_bor2_right").mouseenter(function(){
                    $("#banner_bor2_right").css("background","#0171ad").css("color","#ffffff").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor2_right").css("background","#ffffff").css("color","#0096d6").css("transition-duration","0.5s");
                })

                $("#banner_bor3_left").mouseenter(function(){
                    $("#banner_bor3_left").css("background","#075782").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor3_left").css("background","#0171ad").css("transition-duration","0.5s");
                })
                $("#banner_bor3_right").mouseenter(function(){
                    $("#banner_bor3_right").css("background","#0171ad").css("color","#ffffff").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor3_right").css("background","#ffffff").css("color","#0096d6").css("transition-duration","0.5s");
                })

                $("#banner_bor4_left").mouseenter(function(){
                    $("#banner_bor4_left").css("background","#075782").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor4_left").css("background","#0171ad").css("transition-duration","0.5s");
                })
                $("#banner_bor4_right").mouseenter(function(){
                    $("#banner_bor4_right").css("background","#0171ad").css("color","#ffffff").css("transition-duration","0.5s");
                }).mouseleave(function(){
                    $("#banner_bor4_right").css("background","#ffffff").css("color","#0096d6").css("transition-duration","0.5s");
                })
            }
            //图片缩放
            function magnify(){
                $("#printer").find("img").mouseenter(function(){
                    $("#printer").find("img").stop(true).animate({
                        "width":653,
                        "height":559,
                        "marginLeft":-30,
                        "marginTop":-30
                    },500);
                    $("#printer").find("span").stop(true).animate({
                        "width":33,
                        "height":33,
                        "fontSize":38.5,
                        "marginLeft":-1.5,
                        "marginTop":-1.5
                    },500);
                })
                $("#printer").find("img").mouseleave(function(){
                    $("#printer").find("img").stop(true).animate({
                        "width":594,
                        "height":509,
                        "marginLeft":0,
                        "marginTop":0
                    },500);
                    $("#printer").find("span").stop(true).animate({
                        "width":30,
                        "height":30,
                        "fontSize":35,
                        "marginLeft":0,
                        "marginTop":0
                    },500);
                })
                $("#computer").find("img").mouseenter(function(){
                    $("#computer").find("img").stop(true).animate({
                        "width":653,
                        "height":559,
                        "marginLeft":-29.5,
                        "marginTop":-25.45
                    },500);
                    $("#computer").find("span").stop(true).animate({
                        "width":33,
                        "height":33,
                        "fontSize":38.5,
                        "marginLeft":-1.5,
                        "marginTop":-1.5
                    },500);
                })
                $("#computer").find("img").mouseleave(function(){
                    $("#computer").find("img").stop(true).animate({
                        "width":594,
                        "height":509,
                        "marginLeft":0,
                        "marginTop":0
                    },500);
                    $("#computer").find("span").stop(true).animate({
                        "width":30,
                        "height":30,
                        "fontSize":35,
                        "marginLeft":0,
                        "marginTop":0
                    },500);
                })
               
            }
            function Goods_loading(){
                $.ajax({
                    url:"json/commodity.json",
                    success:function(obj){
                        
                        var oToppri = obj.toppri;
                        var oTopcom = obj.topcom;
                        var str = ``;
                        for(var i = 0; i < oToppri.length; i++){
                            str =$(`<div class="hpprinter">
                                        <div class="hpprinter_top"><a href=""><span>${oToppri[i].title}</span><img src="${oToppri[i].img}" alt=""></a></div>
                                        <div class="hpprinter_bottom"><a class="hpprinter_bottoma" href="">${oToppri[i].know}</a><a href="">${oToppri[i].purchase} &rsaquo;</a></div>
                                    </div>`) 
                            str.appendTo($("#commodity_hiddenp1"))
                        }
                        for(var i = 0; i < oTopcom.length; i++){
                            str =$(`<div class="hpprinter">
                                        <div class="hpprinter_top"><a href=""><span>${oTopcom[i].title}</span><img src="${oTopcom[i].img}" alt=""></a></div>
                                        <div class="hpprinter_bottom"><a class="hpprinter_bottomb" href="">${oTopcom[i].know}</a><a href="">${oTopcom[i].purchase} &rsaquo;</a></div>
                                    </div>`) 
                            str.appendTo($("#commodity_hiddenc"))
                        }
                    }
                })
            }
            function Page_switching(){
                $("#printer").click(function(){
                    $("#commodity").hide();
                    $("#commodity_hiddena,#commodity_hiddenp,#commodity_hiddenp1").show();
                    $("#help div p").html("您的打印机用于...")
                })
                $("#computer").click(function(){
                    $("#commodity").hide();
                    $("#commodity_hiddenb,#commodity_hiddenp,#commodity_hiddenc").show();
                    $("#help div p").html("您的电脑用于...")
                })
                $("#commodity_hiddena").find("#show1").click(function(){
                    $("#commodity").show();
                    $("#commodity_hiddena,#commodity_hiddenp,#commodity_hiddenp1").hide();
                    $("#help div p").html("找到合适您的打印机和电脑")
                })
                $("#commodity_hiddenb").find("#show3").click(function(){
                    $("#commodity").show();
                    $("#commodity_hiddenb,#commodity_hiddenp,#commodity_hiddenc").hide();
                    $("#help div p").html("找到合适您的打印机和电脑")
                })
                $("#commodity_hiddena").find("#show2").click(function(){
                    $("#commodity_hiddenc,#commodity_hiddenb").show();
                    $("#commodity_hiddenp1,#commodity_hiddena").hide();
                    $("#help div p").html("您的电脑用于...")
                })
                $("#commodity_hiddenb").find("#show4").click(function(){
                    $("#commodity_hiddenc,#commodity_hiddenb").hide();
                    $("#commodity_hiddenp1,#commodity_hiddena").show();
                    $("#help div p").html("你的打印机用于...")
                })    
            }
    return {
        pull_down1:pull_down1,
        navData:navData,
        bannerTab:bannerTab,
        navSeach:navSeach,
        bannerHover:bannerHover,
        magnify:magnify,
        Goods_loading:Goods_loading,
        Page_switching:Page_switching
    }
})