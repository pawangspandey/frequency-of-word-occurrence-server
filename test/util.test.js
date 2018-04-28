const expect = require('chai').expect;
const request = require('request-promise');
const util = require('../util');

describe('util function testing', () => {
  it('should return 2 top most used words', () => {
    var words = util.getMostUsedWords('I am pawan pandey. I am a learner', 2);
    expect(words.length).to.be.eql(2);
    expect(words).to.be.deep.equals([{ "i" : 2 },{ "am" : 2 }]);
  });

  it('should fetch text from https://www.w3.org/TR/PNG/iso_8859-1.txt and return top most used words', (done) => {
    request('https://www.w3.org/TR/PNG/iso_8859-1.txt')
    .then(result => util.getMostUsedWords(result, 10))
    .then((words) => {
      expect(words.length).to.be.eql(10);
      done();
    })
    .catch(done);
  });
});
