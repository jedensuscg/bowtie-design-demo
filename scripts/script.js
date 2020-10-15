$(document).ready(function(){
    $("#what-btn").click(function(){
        $("#what").slideDown("slow"),
        $("#what-btn").addClass("btn-selected"),
        $("#who-btn, #believe-btn").removeClass("btn-selected"),
        $("#who, #believe").slideUp("slow")
    });
    $("#who-btn").click(function(){
        $("#who").slideDown("slow"),
        $("#who-btn").addClass("btn-selected"),
        $("#what-btn, #believe-btn").removeClass("btn-selected"),
        $("#what, #believe").slideUp("slow")
    });
    $("#believe-btn").click(function(){
        $("#believe").slideDown("slow"),
        $("#believe-btn").addClass("btn-selected"),
        $("#what-btn, #who-btn").removeClass("btn-selected"),
        $("#what, #who").slideUp("slow")
    });
    $("#dropdown-who").click(function(){
        $("#who").show(),
        $("#who-btn").addClass("btn-selected"),
        $("#what-btn, #believe-btn").removeClass("btn-selected"),
        $("#what, #believe").hide()
    });
    $("#dropdown-what").click(function(){
        $("#what").show(),
        $("#what-btn").addClass("btn-selected"),
        $("#who-btn, #believe-btn").removeClass("btn-selected"),
        $("#who, #believe").hide()
    });
    $("#dropdown-believe").click(function(){
        $("#believe").show(),
        $("#believe-btn").addClass("btn-selected"),
        $("#what-btn, #who-btn").removeClass("btn-selected"),
        $("#what, #who").hide()
    });
  });