(function($){
    $(function () {


        /*初始化右边菜单*/
        function initRight(){
            var menu=rightList.menus;
            var $navMenu = $("#nav-menu").html(' ');
            var $mobileMenu = $("#mobile-menu").html(' ');
            for (var i=0;i<menu.length;i++){
                addMenu($navMenu,menu[i],'');/*pc端动态加载*/
                addMenu($mobileMenu,menu[i],'s');/*移动端菜单动态加载，以在id前添加s作为标识*/
            }
        }

        function addMenu(navMenu,menuJson,s){
            var menuTemp = "<li><a href='#' id='{ID}'>{LABEL}</a></li>";/*字符串对象，用于用于之后的替换*/
            /*动态加载一级菜单*/
            var $mainMenu = $(menuTemp.replace("{ID}",s+"_"+ menuJson.id).replace("{LABEL}",menuJson.label));
            /*动态加载二级菜单*/
            if (menuJson.childens && menuJson.childens.length > 0){
                /*动态生成一级下拉菜单*/
                $mainMenu = $("<li><a class='dropdown-button' href='#' data-activates='" + s + "_" + menuJson.id + "'>" + menuJson.label + "<i class='material-icons right'>arrow_drop_down</i></a></li>");
               /*动态加载二级菜单头*/
                var $subMenu =$("<ul id='"+ s +"_"+ menuJson.id+ "' class='dropdown-content'><ul>");
                $mainMenu.append($subMenu);
                /*动态加载二级菜单项*/
                for (var i=0;i<menuJson.childens.length;i++){
                    addMenu($subMenu,menuJson.childens[i],s)
                }
            }
            else{
                $mainMenu.click(function(){
                    onMenuClicked(menuJson.label);
                })
            }
            navMenu.append($mainMenu);

        }


        function onMenuClicked(menuLabel) {
            $('.button-collapse').sideNav('hide');
            switch (menuLabel)
            {
                case "人员编辑":

                    /*if ($("#nUserInfo").length>0) {        //大于0说明newuser.html已渲染完毕
                     showNewUser();
                     } else {
                     $("#infoMain").load("newuser/newuser.html", function (response, status, xhr) {
                     initNewUser();
                     });
                     }*/
                    showLayerControl();
                    break;
                case "人员查询":
                    /**/
                    if ($("#nUserQuery").length>0){
                        showNewUserQuery();
                    }
                    else{
                        $("#infoMain").load("userquery/userquery.html",function(response,status,xhr){
                            initNewUserQuery();/*初始化userquery页面*/
                        });
                        /* function(response,status,xhr)是load() 方法完成后所执行的函数名称。*/
                    }
                    break;

            }
            return true;

        }

        /*调用initRight生成菜单*/
        initRight();

        /*初始化组件*/
        $(document).ready(function () {
            $(".dropdown-button").dropdown();
            $('.button-collapse').sideNav({
                closeOnSelect: true
            });
        });










    });
})(jQuery);
