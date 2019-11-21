require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "HPhome":"HPhome"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
    }
})

require(['HPhome'], function(HPhome){
    HPhome.pull_down1();
    HPhome.navData();
    HPhome.bannerTab();
    HPhome.navSeach();
    HPhome.bannerHover();
    HPhome.magnify();
    HPhome.Goods_loading();
    HPhome.Page_switching()
})