
var template = require('./jsonPrettyPrint-template.html');

var PieChartController = function(){
  
};

PieChartController.$inject = [];


module.exports = function (angularMod) {

  angularMod.component("pieChart", {
    template: template,
    controller: PieChartController,
    bindings: {
      show: "<"
    }
  });
};