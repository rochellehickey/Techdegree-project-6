const myPlayer = videojs("my-player");
const lines = document.querySelectorAll(".transcript");
var i = 0;

//-------------- HIGHLIGHTING TEXT --------------

myPlayer.on('timeupdate', function() {
  for (var i = 0, l = lines.length; i < l; i++) {
    const whereYouAt = this.currentTime();
    var pDataStart = parseFloat(lines[i].getAttribute("data-start").split(":")[2]);
    var pDataEnd = parseFloat(lines[i].getAttribute("data-end").split(":")[2]);

    if (whereYouAt > pDataStart && whereYouAt < pDataEnd) {
      lines[i].classList.add("current");
    } else {
      lines[i].classList.remove("current");
    }
  }
});

//-------------- CLICK TEXT TO CHANGE VIDEO TIME --------------

// Listen for click event on page
document.addEventListener('click', function(event) {

  // Log the clicked element in the console
  console.log(event.target);

  // IF clicked element is span with class transcript
  if (event.target.className === ('transcript')) {

    // Get data-start of span selected
    // Turn data-start string into a number
    var pDataStart = parseFloat(event.target.getAttribute("data-start").split(":")[2]);

    // Make current time of video data-start number
    var timeUpdate = myPlayer.currentTime(pDataStart);
    myPlayer.play();
  }

}, false);









