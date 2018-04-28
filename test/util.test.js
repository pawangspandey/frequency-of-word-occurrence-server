const expect = require('chai').expect;
const util = require('../util');

describe('util function testing', () => {
  it('should return 2 top most words', () => {
    var words = util.getMostUsedWords('I am pawan pandey. I am a learner', 2);
    expect(words.length).to.be.eql(2);
    expect(words).to.be.deep.equals([{ "I" : 2 },{ "am" : 2 }]);
  });
});
