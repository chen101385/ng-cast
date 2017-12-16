angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (query) => {
      youTube.search(query, (data) => {
        this.currentVideo = data[0];
        this.videos = data;
      });
    };
  },
  templateUrl: 'src/templates/app.html'
});