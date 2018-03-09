var dbAside;//于showNewUserQuery()函数赋值
function initNewUserQuery(){
    /*动态加载各个模块并调用showNewUserQuery函数呈现页面*/
    initQueryInfo();
    initQueryTh();
    showNewUserQuery();
    //暂无组件需初始化，若需要可调用newuser.js文件中initcontrol函数
    //点击按钮关闭页面
    $("#close").click(function(){
        $("html").removeClass("noscroll");
        dbAside.removeClass("active");
    });
    //“查询”按钮功能,未实现
    $("#query").click(function(){
        userQuery();
    })
}

function showNewUserQuery(){
    dbAside = $("#nUserQuery");
    dbAside.addClass("active");/*激活页面显示*/
    $("html").addClass("noscroll");
}

function initQueryInfo(){

    //n,infos分别为键和值，new_为标识
    $.each(queryPerson,function(n,infos){
        $("#queryPersons").append(getChildElement(n,infos,"new_"));
        //循环遍历json对象queryPerson，注意之后要修改函数判断类型，因为json里的值有些是布尔类型
    });
    var $positionCheckbox = $('<p class="col s12 m12 l12"><input type="checkbox" class="filled-in" id="houseposition" /><label for="houseposition" class="black-text">房屋定位（查询结果中排除无房屋人员）</label></p><span class="col s8 m6 l6">共0条记录</span><a id="query" class="col s4 m6 l6 waves-effect waves-light btn">查询</a>');
    $("#positioncheckbox").append($positionCheckbox);

}

function getChildElement(n,infos,s){
    var $divInfo;
    if (infos.values && infos.values == 'true|false'){
        var $checkboxInfo = $('<p class="col s6 m12 l12"><input type="checkbox" class="filled-in" id="'+s+n+'" /><label for="'+s+n+'" class="black-text">'+infos.label+'</label></p>');
        $divInfo = $("#queryCheckbox").append($checkboxInfo);
        return  $divInfo;
    }
    else{
        var $inputInfo = $('<div class="input-field col s12 m12 l12"><input placeholder="'+infos+'" id="'+s+n+'" type="text" class="validate"><label for="'+s+n+'">'+infos+'</label></div>');
        $divInfo = $("#queryInputfield").append($inputInfo);
        return  $divInfo;
    }
}

function initQueryTh(){
    $.each(queryPerson,function(n,infos){
        $("#queryPersonTh").append(getTableElement(n,infos,"table_"));
    });
}

function getTableElement(n,infos,s){
    if(infos.values==null){
        var $thInfo = $('<th data-field="' + s+n + '">' + infos + '</th>');
        return $thInfo;
    }
}








function userQuery(){}

