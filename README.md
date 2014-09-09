# query-selector

querySelectorAll in javascript

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
