(function iife() {
  angular.module('lights', []);

  function LightsCtrl($http) {
    var self = this;
    self.endpoint = '/light/:id/:action';
    self.toggleMap = {
      1: 'off',
      2: 'off',
      3: 'off',
      4: 'off',
      5: 'off',
      6: 'off',
      7: 'off',
      8: 'off',
      9: 'off',
      10: 'off'
    };

    self.toggle = function toggle(id) {
      var action = 'on';
      if (self.toggleMap[id] === 'on') {
        action = 'off';
      }
      $http.get(self.endpoint.replace(':id', id).replace(':action', action));
      self.toggleMap[id] = action;
    };
  }

  function lights() {
    return {
      templateUrl: '/static/lights.html',
      controller: 'LightsCtrl',
      scope: {},
      bindToController: true,
      controllerAs: 'lights'
    };
  }

  angular.module('lights')
    .directive('lights', lights)
    .controller('LightsCtrl', LightsCtrl);
})();
