$( document ).ready(function() {

//-------------- VIDEO PLAYER CONTROLS --------------
  $('video').mediaelementplayer({
    alwaysShowControls: false,
    features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
    stretching: 'responsive'
  });

  //-------------- HIGHLIGHTING TEXT --------------

  var videoTime = document.getElementsByTagName("video").currentTime;
  var lines = document.querySelectorAll("span");

  console.log(videoTime);

  videoTime.addEventListener('timeupdate', function() {
      for (var i = 0, l = lines.length; i < l; i++) {
        if (videoTime >= lines.getAttribute("data-start") &&
            videoTime <= lines.getAttribute("data-end")) {
          lines[i].className = "current";
        } else {
          lines[i].className = "";
        }
      }
  });
});