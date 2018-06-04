//--------------VIDEO PLAYER CONTROLS--------------

// You can use either a string for the player ID (i.e., `player`),
// or `document.querySelector()` for any selector
var player = new MediaElementPlayer('player', {
  pluginPath: "/plugins/mediaelement/",
// When using `MediaElementPlayer`, an `instance` argument
// is available in the `success` callback
  success: function(mediaElement, originalNode, instance) {
    // do things
    alwaysShowControls: "true",
    features: [playpause, current, progress, duration, tracks, volume, fullscreen],
  }
});


//--------------HIGHLIGHTING TEXT--------------
// const captureCaptionText = document.querySelectorAll('span');

// function hightlightCaptionText(captureCaptionText) {
//   for (let i = 0; i < captureCaptionText.length; i++) {
//     captureCaptionText.style.color="orange";
//   }
// }


// video.addEventListener('timeupdate', () => {

// }