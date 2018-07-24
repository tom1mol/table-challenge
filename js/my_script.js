$(document).ready(function() {       //inside this only runs once DOM fully loaded
    $("tr:odd").css("background-color", "#f06b0d");  
    $("tr:even").css("background-color", "#f0e1d7");
    
    
    $("th").click(function(){
        $("tr").children().removeClass("selection")
        $(this).siblings().addClass("selection");
    });
});