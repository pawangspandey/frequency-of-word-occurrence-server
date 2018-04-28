### Frequency of word occurrence server. 
This server will fetch content from [http://terriblytinytales.com/test.txt](http://terriblytinytales.com/test.txt) and gives N top most used words.

### Used Library

* express
* request
* request-promise
* cross-env
* lodash
* mocha
* chai

### Quick Test.
this app hosted on [heroku](https://polar-coast-41204.herokuapp.com/?words=10). you can pass query string `words` with number to get most used words.



## util.js

### util.getMostUsedWords(text, numberOfWords)

***parameters***
  - `text` {String} - any size of text string.
  - `numberOfWords` {Number} - return size of top used words.

***usages***
```js
const text = 'Where can I read all your stories? / I want to read all tales; where can I find them?';
const numberOfWords = 3;

util.getMostUsedWords(text, numberOfWords);
```

***return value***
```js
[{
  "i" : 3,
},{
  "where" : 2
},{
  "can" : 2
}];
```

