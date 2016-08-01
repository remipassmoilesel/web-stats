/**
 * Show a list of availables keywords
 */
var template = require('html!./last-logs.html');

var LastLogsController = function($http, $scope, stats) {

  var self = this;

  stats.getLastLogs().then(function(result) {

    self.lastLogs = result;

    $scope.$apply();

  }).fail(function() {
    console.error(arguments);
  });

};

LastLogsController.$inject = ["$http", "$scope", "stats"];

module.exports = function(angularMod) {

  angularMod.component("lastLogs", {
    template : template,

    controller : LastLogsController,

    bindings : {}
  });
};