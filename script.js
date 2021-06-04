//Button click event handlers
$(".baby-sleep").click(function() {
    $("img").hide();
    $(".sleep").show();
    $("body").css("background-color", "#f2bdcd");
});


$(".baby-bath").click(function() {
    $("img").hide();
    $(".bath").show();
});

$(".eating-baby").click(function() {
    $("img").hide();
    $(".mush").show();
});

$(".baby-walk").click(function() {
    $("img").hide();
    $(".walk").show();
});

$(".baby-play").click(function() {
    $("img").hide();
    $(".play").show();
});

//Surprise! Double click on Laughing Baby
$("img").dblclick(function() {
    $("img").hide();
    $(".baby-love").show();
});

//Reset to default
$(".actions").mouseenter(function() {
    $("img").hide();
    $(".default").show();
    $("body").css("background-color", "#afe0ef");
});