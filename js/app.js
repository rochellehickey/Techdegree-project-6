//--------------VIDEO PLAYER CONTROLS--------------
$('video').mediaelementplayer({
  alwaysShowControls: true,
  features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
  stretching: 'responsive'
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

// video.addEventListener('timeupdate', ()=> {
//     for (let i=0; i <text.length; i++){
//       // if (video.currentTime >= text[i].dataset.start && video.currentTime <= text[i].dataset.end){
//       if (video.currentTime >= text[i].getAttribute("data-start") && video.currentTime <= text[i].getAttribute("data-end")){
//       text[i].style.color = 'orange';
//   } else {
//     text[i].style.color = 'black';
//   }
//  }
// });