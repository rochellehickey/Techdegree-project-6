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

