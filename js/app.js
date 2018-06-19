const myPlayer = videojs("my-player");
const lines = document.querySelectorAll(".transcript");

//-------------- HIGHLIGHTING TEXT --------------

myPlayer.on('timeupdate', function() {
    for (let i = 0, l = lines.length; i < l; i++) {
      const whereYouAt = this.currentTime();
      const pDataStart = parseFloat(lines[i].getAttribute("data-start"));
      const pDataEnd = parseFloat(lines[i].getAttribute("data-end"));

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