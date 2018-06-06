$(document).ready(function() {
    // $("body").css("background", "red");
    console.log($("span").offset());
    $(window).scroll(function () {
        if ($(this).scrollTop() > 406) {
           $("body").addClass("background");
        }
        if ($(this).scrollTop() < 406) {
           $("body").removeClass("background")
        }
     });
});