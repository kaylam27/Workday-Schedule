$(document).ready(function(){

    var rowArr = $(".time-block");
    var currentHour = moment().format("HH");
    var date = $("#currentDay");

    date.text(moment().format("ll"));

    rowArr.each(function(){
        var thisHour = parseInt($(this).data("hour"));
        if (thisHour == currentHour ) {
            $(this).find("input").addClass("present")
        } else if (thisHour < currentHour) {
            $(this).find("input").addClass("past")
        } else if (thisHour > currentHour) {
            $(this).find("input").addClass("future")
        }
    })

    $("button").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    });
   
});