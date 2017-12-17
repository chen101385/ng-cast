angular.module('video-player')

.component('search', {
  bindings: {
    searchText: '<',
    searchResults: '<'
  },
  controller: function() {
    this.content = '';
    this.change = function() {
      this.searchResults(this.content);
    };
    this.result = function() {
      this.searchResults(this.content);
      this.content = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
