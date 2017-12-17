angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function() {
    this.onClick = function() {
      this.selectVideo(this.item);
    };   
  },
  templateUrl: 'src/templates/videoList.html'
});

