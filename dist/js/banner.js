
        $(function(){
            var aBtns = $("#play").find("ol").find("li");
            var oUl = $("#play").find("ul");
            var aLis = oUl.find("li");
            var timer = null;  //定时器返回值
            var iNow = 0; //代表当前显示第几张图片


            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            })

            timer = setInterval(function(){
                iNow++;
                tab();
            }, 2000);


            //切换
            function tab(){
                aBtns.removeClass("active").eq(iNow).addClass("active");

                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("active");
                }

                oUl.animate({top: -iNow * 150}, 500, function(){
                    //动画结束
                    if(iNow == aBtns.size()){
                        iNow = 0;
                        oUl.css("top", 0);
                    }
                })
            }

            $("#banner").mouseenter(function(){
                clearInterval(timer);
            })

            $("#banner").mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                }, 2000);
            })
        });
