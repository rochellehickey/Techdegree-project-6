var myPlayer = videojs("my-player");
var lines = document.querySelectorAll(".transcript");

//-------------- HIGHLIGHTING TEXT --------------

myPlayer.on('timeupdate', function() {
    for (var i = 0, l = lines.length; i < l; i++) {
      var whereYouAt = this.currentTime();
      var pDataStart = parseFloat(lines[i].getAttribute("data-start"));
      var pDataEnd = parseFloat(lines[i].getAttribute("data-end"));

      console.log(whereYouAt);
      // console.log(typeof parseFloat(lines[i].getAttribute("data-start")));

      if (myPlayer >= pDataStart && myPlayer <= pDataEnd) {
        lines[i].className = "current";
      } else {
        lines[i].className = "";
      }
    }
});


console.log('hi');