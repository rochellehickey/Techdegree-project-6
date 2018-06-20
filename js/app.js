const myPlayer = videojs("my-player");
const lines = document.querySelectorAll(".transcript");

//-------------- HIGHLIGHTING TEXT --------------

myPlayer.on('timeupdate', function() {
    for (let i = 0, l = lines.length; i < l; i++) {
      const whereYouAt = this.currentTime();
      const pDataStart = parseFloat(lines[i].getAttribute("data-start"));
      const pDataEnd = parseFloat(lines[i].getAttribute("data-end"));

      // //See if .currentTime() is working
      console.log(whereYouAt);
      // //See whether the .getAttribute is a number or a string
      // console.log(typeof parseFloat(lines[i].getAttribute("data-start")));

      if (whereYouAt === 0) {
        lines[i].className = "";
      } else if (whereYouAt >= pDataStart) {
        lines[i].className = "current";
      } else {
        lines[i].className = "";
      }
    }
});


console.log('hi');