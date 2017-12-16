angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function() {
    // this.main = 'https://www.youtube.com/embed/';
    this.url = (video) => `https://www.youtube.com/embed/${video.id.videoId}`;
  },
  templateUrl: 'src/templates/videoPlayer.html'
});

