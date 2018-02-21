const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation');

// isRealString
  // should reject non-string values
  // should reject string with only spaces
  // should allow string with non-space characters

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var value = isRealString(123);
    expect(value).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var value = isRealString('     ');
    expect(value).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var value = isRealString('    Rodrigo Silveira    ');
    expect(value).toBe(true);
  });
});
