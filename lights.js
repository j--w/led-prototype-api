var makePwm = require( "adafruit-pca9685" );
var pwm = makePwm();

module.exports = function() {
  var floorToAddress = {
    '1': 0,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4
  };

  return {
    on: function(floor) {
      pwm.setPwm(floorToAddress[floor], 0, 4095);
    },
    off: function(floor) {
      pwm.setPwm(floorToAddress[floor], 0, 0);
    },
    allOn: function() {
      for(var key in floorToAddress) {
        pwm.setPwm(floorToAddress[key], 0, 4095);
      }
    },
    allOff: function() {
      pwm.stop();
    }
  };
};
