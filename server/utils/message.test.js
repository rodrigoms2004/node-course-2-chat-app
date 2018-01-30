var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, text});
  });

});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = '-23.620247199999998';
    var longitude = '-46.698462799999994';
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);
    
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});

//https://www.google.com/maps?q=-23.620247199999998,-46.698462799999994
