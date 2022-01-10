
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  var element = document.querySelector(".buttonAudio");
  element.classList.add("paused");
  isPlaying = true;
};
myAudio.onpause = function() {
  var element = document.querySelector(".buttonAudio");
  element.classList.remove("paused");
  isPlaying = false;
};