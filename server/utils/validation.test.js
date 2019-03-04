const expect = require('expect');
const {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let result = isRealString(1);
        expect(result).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        let result = isRealString('    ');
        expect(result).toBeFalsy();
    });

    it('should allow string with non-space character', () => {
        var result = isRealString('  udgin ');
        expect(result).toBeTruthy();

    });
})

