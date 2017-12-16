angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function() {
    this.url = (video) => `https://www.youtube.com/embed/${video.id.videoId}`;
  },
  templateUrl: 'src/templates/videoPlayer.html'
});

