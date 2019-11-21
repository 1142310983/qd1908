require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "commodity":"commodity"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
    }
})

require(["commodity"], function(commodity){
    commodity.navigation();
    commodity.Commodity_switch();
    commodity.headerNav();
    commodity.click_down();
})