'use strict';

module.exports = function(Pin) {
  Pin.savePins = async(data) => {
    const { userId, pins } = data;
    const dataForSave = pins.map(pin => ({ userId, location: pin.location }));
    return Pin.create(dataForSave);
  };

  Pin.findByUserId = async(userId) => {
    return Pin.find({ where: { userId }})
  }
};
