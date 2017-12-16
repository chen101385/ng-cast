angular.module('video-player')

.component('search', {
  bindings: {
    searchText: '<',
    searchResults: '<'
  },
  controller: function() {
    this.content = '';
    this.processResults = function() {
      this.searchResults(this.content);
      this.content = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
