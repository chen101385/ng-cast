angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<',
    selectVideo: '<',
    onClick: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
