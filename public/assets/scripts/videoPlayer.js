videoPlayer.addEventListener("loadedmetadata", function () {
  (videoDuration = Math.round(videoPlayer.duration)),
    videoTrack.setAttribute("max", videoDuration);
}),
  videoSound.addEventListener("click", function () {
    0 == soundTrack.value
      ? (controlVolumeStatus(1), (soundTrack.value = 10))
      : (controlVolumeStatus(0), (soundTrack.value = 0));
  }),
  videoPlay.addEventListener("click", function () {
    videoPlayer.play();
  }),
  videoPause.addEventListener("click", function () {
    videoPlayer.pause();
  }),
  videoStart.addEventListener("click", function () {
    videoPlayer.pause(), (videoPlayer.currentTime = 0), (videoTrack.value = 0);
  }),
  videoEnd.addEventListener("click", function () {
    videoPlayer.pause(),
      (videoPlayer.currentTime = videoDuration - 1),
      (videoTrack.value = videoDuration - 1);
  }),
  videoFullScreen.addEventListener("click", function () {
    videoPlayer.requestFullscreen
      ? videoPlayer.requestFullscreen()
      : videoPlayer.mozRequestFullScreen
      ? videoPlayer.mozRequestFullScreen()
      : videoPlayer.webkitRequestFullscreen &&
        videoPlayer.webkitRequestFullscreen();
  }),
  videoTrack.addEventListener("change", function () {
    videoPlayer.currentTime = this.value;
  }),
  (updateVolume = function () {
    window.requestAnimationFrame(function () {
      controlVolumeStatus(soundTrack.value / 10);
    });
  }),
  soundTrack.addEventListener("mousedown", function () {
    updateVolume(), soundTrack.addEventListener("mousemove", updateVolume);
  }),
  soundTrack.addEventListener("mouseup", function () {
    soundTrack.removeEventListener("mousemove", updateVolume);
  }),
  videoPlayer.addEventListener("timeupdate", function () {
    (videoTrack.value = videoPlayer.currentTime),
      (videoTime.innerHTML = controlTimeFormat(videoPlayer.currentTime)),
      Math.round(videoPlayer.currentTime) === videoDuration &&
        setTimeout(function () {
          (videoPlayer.currentTime = 0),
            (videoTrack.value = 0),
            videoPlayer.pause();
        }, 1e3);
  }),
  setTimeout(function () {
    videoPlayer.pause();
  }, 500);
function controlTimeFormat(e) {
  var a = Math.floor(e / 3600),
    t = Math.floor((e - 3600 * a) / 60),
    o = Math.floor(e - 3600 * a - 60 * t);
  return (
    t < 10 && (t = "0" + t),
    o < 10 && (o = "0" + o),
    a < 10 && (a = "0" + a),
    a + ":" + t + ":" + o
  );
}
function controlVolumeStatus(e) {
  (videoPlayer.volume = e),
    console.log(videoPlayer.volume),
    0 === e
      ? videoSoundIcon.setAttribute("xlink:href", "#i-mute")
      : videoSoundIcon.setAttribute("xlink:href", "#i-volume");
}
videoPlayer.addEventListener("loadedmetadata", function () {
  (videoDuration = Math.round(videoPlayer.duration)),
    videoTrack.setAttribute("max", videoDuration);
}),
  videoSound.addEventListener("click", function () {
    0 == soundTrack.value
      ? (controlVolumeStatus(1), (soundTrack.value = 10))
      : (controlVolumeStatus(0), (soundTrack.value = 0));
  }),
  videoPlay.addEventListener("click", function () {
    videoPlayer.play();
  }),
  videoPause.addEventListener("click", function () {
    videoPlayer.pause();
  }),
  videoStart.addEventListener("click", function () {
    videoPlayer.pause(), (videoPlayer.currentTime = 0), (videoTrack.value = 0);
  }),
  videoEnd.addEventListener("click", function () {
    videoPlayer.pause(),
      (videoPlayer.currentTime = videoDuration - 1),
      (videoTrack.value = videoDuration - 1);
  }),
  videoFullScreen.addEventListener("click", function () {
    videoPlayer.requestFullscreen
      ? videoPlayer.requestFullscreen()
      : videoPlayer.mozRequestFullScreen
      ? videoPlayer.mozRequestFullScreen()
      : videoPlayer.webkitRequestFullscreen &&
        videoPlayer.webkitRequestFullscreen();
  }),
  videoTrack.addEventListener("change", function () {
    videoPlayer.currentTime = this.value;
  }),
  (updateVolume = function () {
    window.requestAnimationFrame(function () {
      controlVolumeStatus(soundTrack.value / 10);
    });
  }),
  soundTrack.addEventListener("mousedown", function () {
    updateVolume(), soundTrack.addEventListener("mousemove", updateVolume);
  }),
  soundTrack.addEventListener("mouseup", function () {
    soundTrack.removeEventListener("mousemove", updateVolume);
  }),
  videoPlayer.addEventListener("timeupdate", function () {
    (videoTrack.value = videoPlayer.currentTime),
      (videoTime.innerHTML = controlTimeFormat(videoPlayer.currentTime)),
      Math.round(videoPlayer.currentTime) === videoDuration &&
        setTimeout(function () {
          (videoPlayer.currentTime = 0),
            (videoTrack.value = 0),
            videoPlayer.pause();
        }, 1e3);
  }),
  setTimeout(function () {
    videoPlayer.pause();
  }, 500);
