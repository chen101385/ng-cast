angular.module('video-player')
.component('app', {
  controller: function($window, youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (query) => {
      youTube.search(query, (data) => {
        if (data) {
          this.currentVideo = data[0];
          this.videos = data;  
        }
      });
    };
    this.searchResults('cats');
  },
  templateUrl: 'src/templates/app.html'
});