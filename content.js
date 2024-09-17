// Waiting for total loading
window.addEventListener('load', function() {

  // Getting the video
  const video = document.querySelector('video');

  // Getting the URL
  const url = new URL(window.location.href);

  // Update time
  const timeout = 1500;

  // Running routine
  setInterval(() => {
    url.searchParams.set('t', `${Math.ceil(video.currentTime)}s`);
    history.replaceState(null, '', url);
  }, timeout);

});
