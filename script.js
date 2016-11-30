function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + " minutes " + seconds+ " seconds");

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

var twoMinutes = 60 * 2,
    display = $('#time');
startTimer(twoMinutes, display);

var input = $("#new-item-input")
input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("graceList", valueToSave);
  }
})


onNewListItem("graceList", function(value) {
  $("#list-display").append("<div>" + value +"</div>")

}) 