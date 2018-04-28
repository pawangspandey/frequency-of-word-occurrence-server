
const _ = require('lodash');

/**
 * find keys by value
 * @param {Object} obj data object.
 * @param {Number} val value
 * @returns {Array<Object>}
 */
const findKeysByValue = (obj, val) => {
  return Object.keys(obj).filter(key => obj[key] === val);
}

/**
 * get most used word.
 * @param {String} text string 
 * @param {Number} numberOfWords number of top frequently used words.
 * @returns {Array<object>}
 */

const getMostUsedWords = (text, numberOfWords) => {

  const wordsWithCount = { };
  const topMostUsedWords = [];
  // split text into lines 
  const lines = text.split(/(?:\r\n|\r|\n)/g);

  _.each(lines, (line) => {
    line = line.trim();

    const wordArray = line.split(/(?:\s)|^$/);
    _.each(wordArray, (word) => {
      // removing any beginning and end not characters.
      word = word.replace(/^\W*(.*?)\W*$/, '$1', word);
      wordsWithCount[word] = ( wordsWithCount[word] || 0) + 1;
    });

  });

  let values = _.values(wordsWithCount);
  
  // removing duplication.
  values = [... new Set(values)];
  // sorting in descending order.
  values = values.sort((a, b) => b-a);
  
  _.each(values, (value) => {
    let keys = findKeysByValue(wordsWithCount, value);
    let words = _.map(keys, key => { 
      const obj =  { [key] : wordsWithCount[key] };
      return obj;
    });
    _.each(words, (word) => topMostUsedWords.push(word));
  })

  return topMostUsedWords.splice(0, numberOfWords);

}

module.exports.getMostUsedWords = getMostUsedWords;
