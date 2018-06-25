const myPlayer = videojs("my-player");
const lines = document.querySelectorAll(".transcript");

//-------------- HIGHLIGHTING TEXT --------------

myPlayer.on('timeupdate', function() {
  for (let i = 0, l = lines.length; i < l; i++) {
    const whereYouAt = this.currentTime();
    let pDataStart = parseFloat(lines[i].getAttribute("data-start").split(":")[2]);
    let pDataEnd = parseFloat(lines[i].getAttribute("data-end").split(":")[2]);

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
  if (lines === true) {

    // Get data-start of span selected
    // Turn data-start string into a number
    let pDataStart = parseFloat(lines[i].getAttribute("data-start").split(":")[2]);

    // Make current time of video data-start number
    this.currentTime() = pDataStart.value;
  }

}, false);









