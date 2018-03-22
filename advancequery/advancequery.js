var dbAside;
/**初始化页面并显示
 *
 */
function initNewAdvanceQuery(){
    //细分4个标签模块并初始化
    initNewbaseInfo();
    initNewpersonUnsafeTypeInfo();
    initNewunsafegoodsInfo();
    /*initNewexportTemplate();若需要可再写导出模板的动态加载*/
    initControl();
    showNewAdvanceQuery();
    $('input[name="BaseInfocheck"]').on('click', function() {
        checkReturn(this);
    });

    $("#close").click(function(){
        $("html").removeClass("noscroll");
        dbAside.removeClass("active");
    });

    $("#checkallBaseinfo").click(function(){
        checkallBaseinfo();
    });
    //底部按钮功能
    /*$("#search").click(
        function () {
        }
    );
    $("#export").click(
        function () {
        }
    );
    $("#clear").click(
        function () {
        }
    );
    $("#quit").click(
        function () {
        }
    );*/
}

function showNewAdvanceQuery(){
    dbAside = $("#nAdvanceQuery");
    dbAside.addClass("active");/*激活页面显示*/
    $("html").addClass("noscroll");
}

/**基本模块
 *
 */
function initNewbaseInfo(){
    //再细分4个表单模块,调用的函数动态加载相应元素
    initbaseInfos();
    initregistrationInfos();
    initfloatingInfos();
    initunsafepersonInfos();
}
function initNewpersonUnsafeTypeInfo(){
    for (var i in personUnsafeType){
        $("#UnsafeTypeInfos").append($('<p class=" col s8 m4 l4"><input type="checkbox" class="filled-in" id="'+i+'"/><label class="white-text" for="'+i+'">'+personUnsafeType[i]+'</label></p>'));
    }
}

function initNewunsafegoodsInfo(){
    for (var i in unsafeInfo.unsafegoods){
        if (unsafeInfo.unsafegoods[i].values) {
            $("#unsafegoodsInfos").append('<p class="row col s12 m6 l6 valign-wrapper"><input class="col s6  filled-in" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+unsafeInfo.unsafegoods[i].label+'</label></p>');
            var $selector = $('<select class="col s6 " id="'+"advance_"+i+'"><option value="" disabled selected>选择' + unsafeInfo.unsafegoods[i].label + '</option></select>');
            $("label[for=" + i + "]").after($selector);//将下拉列表添加在label标签之后
            $.each(unsafeInfo.unsafegoods[i].values, function (idx, opt) {
                $selector.append($('<option value="' + opt + '" >' + opt + '</option>'));
            });
        }
        else {
            $("#unsafegoodsInfos").append('<p class="row col s12 m6 l6 "><input class="col s6 filled-in" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+unsafeInfo.unsafegoods[i].label+'</label><input class="col s6 right validate" id="'+'advance_'+i+'" type="text"></p>');
        }

    }

}

function initbaseInfos(){
    //遍历baseInfo Json对象通过判断是否存在values以加载相应元素
    for(var i in baseInfo ){
        if (baseInfo[i].values){
            var $ickb =$('<div class="row col s12 m6 l6"><p class="row col s6"><input class="col s12 filled-in left"  name="BaseInfocheck" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+baseInfo[i].label+'</label></p></div>');
            $("#baseInfos").append($ickb);
              /* $ickb.click(function(){
                   checkReturn(this);
                });*/
           // $("#baseInfos").append('<p class="row col s12 m6 l6 left-align"><input class="col s8 filled-in" name="BaseInfocheck" onchange="checkReturn(this)"  type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+baseInfo[i].label+'</label></p>')
            var $selector =$('<select id="'+'advance_'+i+'" class="col s6 right"><option value="" disabled selected>选择' +baseInfo[i].label+ '</option></select>');
            $("label[for="+i+"]").parent().after($selector);//将下拉列表添加在p标签之后
            $.each(baseInfo[i].values, function (idx, opt) {
                $selector.append($('<option value="' + opt + '" >' + opt + '</option>'));
            });

        }
        else{
            $("#baseInfos").append('<div class="row col s12 m6 l6"><p class="row col s6"><input class="col s12 filled-in left" name="BaseInfocheck" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+baseInfo[i].label+'</label></p><input class="col s6 right validate" id="'+'advance_'+i+'" type="text"></div>');
        }
    }
}

function initregistrationInfos(){
    //遍历registrationInfo Json对象
    for(var i in registrationInfo ){
        if (registrationInfo[i].values){
            $("#registrationInfos").append('<div class="row col s12"><p class="row col s6"><input class="col s12 filled-in" name="BaseInfocheck" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+registrationInfo[i].label+'</label></p></div>');
            var $selector =$('<select id="'+'advance_'+i+'" class="col s6"><option value="" disabled selected>选择' +registrationInfo[i].label+ '</option></select>');
            $("label[for="+i+"]").parent().after($selector);//将下拉列表添加在p标签之后
            $.each(registrationInfo[i].values, function (idx, opt) {
                $selector.append($('<option value="' + opt + '" >' + opt + '</option>'));
            });

        }
        else{
            $("#registrationInfos").append('<div class="row col s12 "><p class="col s6 left" ><input class="col s12 filled-in" name="BaseInfocheck" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+registrationInfo[i].label+'</label></p><input class="col s6 validate right" id="'+'advance_'+i+'" type="text"></div>');
        }
    }
}

function initfloatingInfos(){
    //遍历floatInfo Json对象
    for(var i in floatInfo ){
        $("#floatingInfos").append('<p class="row col s12"><input class="col s6 filled-in" type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+floatInfo[i].label+'</label></p>')
        var $selector =$('<select id="'+'advance_'+i+'" class="col s6 right"><option value="" disabled selected>选择' +floatInfo[i].label+ '</option></select>');
        $("label[for="+i+"]").after($selector);//将下拉列表添加在label标签之后
        $.each(floatInfo[i].values, function (idx, opt) {
            $selector.append($('<option value="' + opt + '" >' + opt + '</option>'));
        });
    }
}
function initunsafepersonInfos(){
    //遍历unsafeInfo Json对象中的unsafeperson对象
    for(var i in unsafeInfo.unsafeperson ){
        if (unsafeInfo.unsafeperson[i].values) {
            $("#unsafepersonInfos").append('<p class="row col s12"><input class="col s6 filled-in" type="checkbox" id="' + i + '" /><label class="white-text" for="'+i+'">' + unsafeInfo.unsafeperson[i].label + '</label></p>')
            var $selector = $('<select id="' + 'advance_' + i + '" class="col s6 right"><option value="" disabled selected>选择' + unsafeInfo.unsafeperson[i].label + '</option></select>');
            $("label[for=" + i + "]").after($selector);//将下拉列表添加在label标签之后
            $.each(unsafeInfo.unsafeperson[i].values, function (idx, opt) {
                $selector.append($('<option value="' + opt + '" >' + opt + '</option>'));
            });
        }
        else {
            $("#unsafepersonInfos").append('<p class="row col s12"><input class="col s6 filled-in"type="checkbox" id="'+i+'" /><label class="white-text" for="'+i+'">'+unsafeInfo.unsafeperson[i].label+'</label><input class="col s6 right validate" id="'+'advance_'+i+'" type="text"></p>');
        }
    }
}


/**初始化组件
 *
 */
function initControl(){
    $(".dropdown-button").dropdown();
    $('.button-collapse').sideNav();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('input#identitycard').characterCounter();
    $('.datepicker').pickadate({
        selectMonths: true, selectYears: 200, monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        labelMonthNext: '下一个月',
        labelMonthPrev: '上一个月',
        closeOnSelect: true,
        labelMonthSelect: '选择月',
        labelYearSelect: '选择年',
        monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        weekdaysFull: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysLetter: ['日', '一', '二', '三', '四', '五', '六'],
        today: '今天',
        clear: '清除',
        close: '选定',
        format: 'yyyy-mm-dd',
    });
}

function checkallBaseinfo(){
    // 判断全选按钮是否是已选中状态
    //返回属性的值
    if ($("#checkallBaseinfo").prop("checked")) {
        // 将各个子单选按钮设为选中状态
        $('input[name="BaseInfocheck"]').prop('checked', true);
    } else { // 此时全选按钮起到反选作用
        // 将选中状态改为非选中
        $('input[name="BaseInfocheck"]').prop('checked', false);
    }
}

/**当某个名字为BaseInfocheck的 复选框被点击时执行
 *
 * @param obj
 */
function checkReturn(obj){
    //获取所有名字为BaseInfocheck的复选框
    var BaseInfocheckset =$('input[name="BaseInfocheck"]');
    //遍历该复选框元素集合，判断其checked是否有未被选中的，若有则设置全选框为未被选中
    for(var i=0;i<BaseInfocheckset.length;i++){
        if(BaseInfocheckset[i].checked==false){
            $("#checkallBaseinfo").prop("checked",false);
        }
        //名字为BaseInfocheck的复选框的长度
        var BIckbL =BaseInfocheckset.length;
        //名字为BaseInfocheck且被选中的复选框的长度
        var BIckbCheckedL =$('input[name="BaseInfocheck"]:checked').length;
        if(BIckbCheckedL ==BIckbL){
            //设置全选框选中
            $("#checkallBaseinfo").prop("checked",true);
        }
    }
}


