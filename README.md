# query-selector
---

querySelectorAll in javascript

[![query-selector](https://nodei.co/npm/query-selector.png)](https://npmjs.org/package/query-selector)
[![NPM downloads](http://img.shields.io/npm/dm/query-selector.svg)](https://npmjs.org/package/query-selector)
[![Build Status](https://secure.travis-ci.org/yiminghe/query-selector.png?branch=master)](https://travis-ci.org/yiminghe/query-selector)
[![Coverage Status](https://img.shields.io/coveralls/yiminghe/query-selector.svg)](https://coveralls.io/r/yiminghe/query-selector?branch=master)


## usage

```
import querySelectorAll from 'query-selector'; // var querySelectorAll = require('query-selector').default;
import {jsdom} from "jsdom";
var doc = jsdom('<html><div id="t"><span>1</span><span>2</span></div></html>');
var time = Date.now();
console.log(doc.querySelectorAll('#t span', doc).length);
console.log(doc.querySelectorAll('#t span', doc)[0].innerHTML);
console.log(Date.now()-time);
time = Date.now();
console.log(querySelectorAll('#t span', doc).length);
console.log(querySelectorAll('#t span', doc)[0].innerHTML);
console.log(Date.now()-time);
```

## history

### 2.0.0 / 2019.08.14

- use new build tool and test tool
- change export: `var querySelectorAll = require('query-selector').default;`
