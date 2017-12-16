angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    searchText: '<',
    searchResults: '<'
  },
  controller: function() {
    this.content = '';
    /*
    trying to clear query after search
    */
  },
  templateUrl: 'src/templates/search.html'
});
