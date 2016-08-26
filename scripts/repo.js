(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor and simplify this ajax call into a get request
  // to the proxy end point provided by server.js.
  repos.requestRepos = function(callback) {
    proxyGitHub(
    $.ajax({
      url: 'https://api.github.com/users/brookr/repos' +
            '?per_page=100' +
            '&sort=updated',
      type: 'GET',
      success: function(data) {
        repos.all = data;
      }
    }).done(callback));
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
