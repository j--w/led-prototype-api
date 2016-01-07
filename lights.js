var makePwm;
var pwm;
if (process.env.NODE_ENV !== 'dev') {
  makePwm = require('adafruit-pca9685');
  pwm = makePwm();

  module.exports = function lights() {
    var floorToAddress = {
      '1': 0,
      '2': 1,
      '3': 2,
      '4': 3,
      '5': 4,
      '6': 5,
      '7': 6,
      '8': 7,
      '9': 8,
      '10': 9
    };

    return {
      on: function on(floor) {
        pwm.setPwm(floorToAddress[floor], 0, 4095);
      },
      off: function off(floor) {
        pwm.setPwm(floorToAddress[floor], 0, 0);
      },
      allOn: function allOn() {
        var key;
        for (key in floorToAddress) {
          if (Object.prototype.hasOwnProperty.call(floorToAddress, key)) {
            pwm.setPwm(floorToAddress[key], 0, 4095);
          }
        }
      },
      allOff: function allOff() {
        pwm.stop();
      }
    };
  };
} else {
  module.exports = function lights() {
    return {
      on: function on() {
      },
      off: function on() {
      }
    };
  };
}
