function updateYouTubeTime()
{
  let video = document.querySelector('video');
  if (video) {
    let url = new URL(window.location.href);
    url.searchParams.set('t', `${Math.floor(video.currentTime)}s`);
    history.replaceState(null, '', url);
  }
}

setInterval(updateYouTubeTime, 5000);
