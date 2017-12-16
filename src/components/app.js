angular.module('video-player')

.component('app', {
  // bindings: {
  //   search: '<'
  // },
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = function(query) {
      //call search method using query
        //get data back
          // //update videos & current video
          // console.log(query);
          
      
    };
  },
        //search method
      //type text into search bar
        //press enter/click button
          //get/fetch 
            //populate video list & video player
    // $http({
    //   method: 'GET',
    //   url: "src/data/exampleVideoData.js"
    // }).then(function successCallback(response) {
    //   console.log('success');
    // }, function errorCallback(response) {
    //   console.log('failure');
    // });
    
  templateUrl: 'src/templates/app.html'
});
