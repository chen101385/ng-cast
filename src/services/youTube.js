angular.module('video-player')
.service('youTube', function($http) {
  this.search = (query, callback) => {
    $http({
      params: {
        key: window.YOUTUBE_API_KEY,
        q: query, 
        maxResults: 5,
        part: 'snippet'
      },
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(function successCallback(response) {
      console.log(response);
      callback(response.data.items);
      console.log('success');
    }, function errorCallback(response) {
      console.log('failure');
    });  
  };
});
