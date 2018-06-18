I   var myPlayer = document.getElementById("my-player");
  var lines = document.querySelectorAll(".transcript");

  //-------------- HIGHLIGHTING TEXT --------------

  myPlayer.addEventListener("timeupdate", function() {
      for (var i = 0, l = lines.length; i < l; i++) {
        if (myPlayer >= lines[i].getAttribute("data-start") &&
            myPlayer <= lines[i].getAttribute("data-end")) {
          lines[i].className = "current";
        } else {
          lines[i].className = "";
        }
      }
  });

console.log('hi');