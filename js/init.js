/*初始化*/
/*这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码，即在 DOM 加载完成后才可以对 DOM 进行操作。*/
/*折叠按钮*/
$( document ).ready(function(){
    $(".button-collapse").sideNav();/*折叠按钮*/
    $('.slider').slider({full_width: true});/*全屏轮播*/
    $(".dropdown-button").dropdown();/*下拉菜单*/
    $('select').material_select();
   /* $('select').material_select();/*对于动态生成的下拉列表你必须单独调用初始化。*/
});

