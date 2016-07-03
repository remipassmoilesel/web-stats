/**
 * Show a list of availables keywords
 */
var template = require('html!./event-list-template.html');

var stats = require("../../Stats-embed.js")({
  autosend : false,
  destinationUrl : "http://127.0.0.1:3000",
  authorization : "DK5I4-0yl9N2KN64Pg5YcEAsdnCXeamr"
});

var EventListContainer = function($http, $scope) {

  var self = this;

  this.title = "Heeelllooooo !";
  
  stats.getEventList().then(function(result) {
    
    self.eventList = result;

    $scope.$apply();
    
  });

};

EventListContainer.$inject = ["$http", "$scope"];

module.exports = function(angularMod) {

  angularMod.component("eventList", {
    template : template, controller : EventListContainer, bindings : {}
  });
};