// Get the audio element
const audio = document.getElementById("customAudio");

// Play the audio when the page loads
audio.autoplay = true;

// Function to play or pause the audio
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Add a click event listener to the audio player container
document.querySelector(".aud").addEventListener("click", togglePlayPause);
