$("#stop-button").on("click", function()  {
    $("#stop-light").css("background-color", "red"); 
    $("#slow-light").css("background-color", "#111");
    $("#go-light").css("background-color", "#111");
});

$("#slow-button").on("click", function() {
  $("#slow-light").css("background-color", "yellow");
  $("#stop-light").css("background-color", "#111");
  $("#go-light").css("background-color", "#111");
});

$("#go-button").on("click", function () {
    $("#go-light").css("background-color", "green");
    $("#slow-light").css("background-color", "#111");
    $("#stop-light").css("background-color", "#111");
    console.log("green");
});