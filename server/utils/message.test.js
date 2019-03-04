var expect = require('expect');
var{generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

          expect(typeof message.createdAt).toBe('number');
      
        expect(message).toMatchObject({
            from: from,
            text: text
        });
        
    });
});

describe('generateLocationMessage', () => {
    it('should generete correct lacation object', () => {
        var from = 'Debil';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15, 19';

        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});