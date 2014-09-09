# query-selector

querySelectorAll in javascript

[![query-selector](https://nodei.co/npm/query-selector.png)](https://npmjs.org/package/query-selector)
[![NPM downloads](http://img.shields.io/npm/dm/query-selector.svg)](https://npmjs.org/package/query-selector)
[![Build Status](https://secure.travis-ci.org/kissyteam/query-selector.png?branch=master)](https://travis-ci.org/kissyteam/query-selector)
[![Coverage Status](https://img.shields.io/coveralls/kissyteam/query-selector.svg)](https://coveralls.io/r/kissyteam/query-selector?branch=master)
[![Dependency Status](https://gemnasium.com/kissyteam/query-selector.png)](https://gemnasium.com/kissyteam/query-selector)
[![Bower version](https://badge.fury.io/bo/query-selector.svg)](http://badge.fury.io/bo/query-selector)
[![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)](http://nodejs.org/download/)

[![browser support](https://ci.testling.com/kissyteam/query-selector.png)](https://ci.testling.com/kissyteam/query-selector)


## use on node

require jsdom

```
var querySelectorAll = require('query-selector');
var jsdom = require("jsdom").jsdom;
var doc = jsdom('<html><div id="t"><span>1</span><span>2</span></div></html>');
console.log(querySelectorAll('#t span', doc).length);
console.log(querySelectorAll('#t span', doc)[0].innerHTML);
```

## use standalone on browser

```html
<script src="/build/query-selector-standalone-debug.js"></script>
<div id="t">
    <span>1</span>
    <span>2</span>
</div>
<script>
    console.log(querySelectorAll('#t span'));
</script>
```
