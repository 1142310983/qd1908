require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "register":"register"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
    }
})

require(["register"], function(register){
    register.navigation();
    register.headerNav();
    register.Form_Authentication();
})