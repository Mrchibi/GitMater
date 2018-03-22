//var
/**动态加载各个模块并调用showNewUserQuery函数呈现页面
 *
 */
function initNewUserQuery(){

    //initQueryTh();/*初始化表头*/
    showNewUserQuery();
    initControl();
    //暂无框架组件需初始化，若需要可调用newuser.js文件中initcontrol函数
    //点击按钮关闭页面
    $('#userquery').click(function() {
        var personInfo = {};
        var $formArray = $('form').serializeArray();
        $.each($formArray, function() {
            personInfo[this.name] = this.value;
        });
        alert(JSON.stringify(personInfo));
        console.log(personInfo);
    });


    $("#close").click(function(){
        $("html").removeClass("noscroll");
        elAside.removeClass("active");
    });
    //“查询”按钮功能,未实现

    $("#detail").click(function(){
        showDetail();/*显示详细结果*/
    });

    $("[id^=query_]").each(function (idx, item) {
        $(item).change(query_input_change);
    });
}
function query_input_change() {
    //alert($(this).val());
}
function initControl() {
    $(".dropdown-button").dropdown();
    $('.button-collapse').sideNav();
    $('ul.tabs').tabs({
        onShow: function (event, ui) {
            //alert(event.attr("id"));
            currentTab = event.attr("id");
        }
    });
    $('select').material_select();
    $('input').characterCounter();


}

function showNewUserQuery(){
    var elAside = $("#nUserQuery");
    elAside.addClass("active");/*激活页面显示*/
   /* $.smartScroll(elAside, '.scrollable');
    $("html").addClass("noscroll");*/
}



/*function getChildElement_q(n,infos,s){
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
}*/

function initQueryTh(){
    /*$.each(queryPerson,function(n,infos){
     $("#queryPersonThr").append(getTableHelement(n,infos,"table_"));
     });
     $("#queryPersonThr").append($('<th data-field="table_detail">详细</th>'));
     */
}

/*function getTableHelement(n,infos,s){
    if(infos.values==null){
        var $thInfo = $('<th data-field="' + s+n + '">' + infos + '</th>');
        return $thInfo;
    }
}*/

/**获取输入框中的值，并根据值在数据库中查找对应的信息显示出来（未实现）
 * 先写一个测试用的条目并附带一个“详细”按钮
 *
 */
function showQuery(){
    var $testQuery = $('<tr><td>阿凡提.买买提</td><td>男</td><td>654001121212121212</td><td><a class="waves-effect waves-light btn" id="detail" onclick="showDetail()">详细</a></td></tr>');
    $("#queryPersonTd").append($testQuery);

}
/**显示查询详细结果
 *
 */
function showDetail(){
    /*先关闭之前的第一个弹出层页面也就是userquert.html*/
    $("html").removeClass("noscroll");
    elAside.removeClass("active");
    /*然后渲染dashboard.html中的infoDetail块并显示*/
    $("#infoDetail").load("userquery/querydetail.html",function(response,status,xhr){
        initNewUserQueryDetail();/*初始化userquery页面*/
    });

}

/**渲染查询结果页面
 *
 */
/*function initNewUserQueryDetail(){

    elAside = $("#nUserQueryDetail");

    for(var i in baseInfo){
        $("#queryDetailsLeft").append(getQueryChildElement(i,baseInfo[i],"query_"));
    }
    for(var j=8;j<baseInfo.length;j++){
        var Rn=baseInfo[j];
        var Rinfos=baseInfo[j].value;
        $("#queryDetailsRight").append(getQueryChildElement(Rn,Rinfos,"query_"));
    }

    $("#closedetail").click(function(){
        $("html").removeClass("noscroll");
        elAside.removeClass("active");
    });
}*/


/*function getQueryChildElement(n,infos,s){
    var $qdInfo;
    $qdInfo =$('<div class="input-field col s12 m12 l12"><input placeholder="'+infos.label+'" id="'+s+n+'" type="text" class="validate"><label for="'+s+n+'>'+infos.label+'</label></div>');
    return $qdInfo;
}*/






