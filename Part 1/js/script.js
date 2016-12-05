$(document).ready(function() {
$("#menu ul").hide();
$("#menu li span").click(function() {
    $("#menu ul:visible").slideUp("normal");
    $('.sign').text('+');
    if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
        $(this).next().slideDown("normal");
        $("#menu li .menu_item").not(this).css({'background': '#fff'});
        $("#menu li .menu_item").not(this).children().css({'color': '#2a2d32'});
        $(this).css({'background': '#f4b60d'});
        $(this).children().css('color', '#fff');
        $(this).children('.sign').text('-');
    } else if ($(this).next().is(":visible")){
      $(this).css({'background': '#fff'});
      $(this).children().css('color', '#2a2d32');
    }
});
});
