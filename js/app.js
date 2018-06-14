
  // //-------------- VIDEO PLAYER CONTROLS --------------
  // var myPlayer = new MediaElementPlayer('video', {
  //   alwaysShowControls: false,
  //   features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
  //   stretching: 'responsive'
  // });

  var lines = document.getElementsByTagName("span");
  var myPlayer = document.getElementById("my-player");

  //-------------- HIGHLIGHTING TEXT --------------

  myPlayer.addEventListener("timeupdate", function() {
    console.log("Hi");
      for (var i = 0, l = lines.length; i < l; i++) {
        if (this >= lines.getAttribute("data-start") &&
            this <= lines.getAttribute("data-end")) {
          lines[i].className = "current";
        } else {
          lines[i].className = "";
        }
      }
  });

