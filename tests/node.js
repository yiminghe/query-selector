(function () {
    var querySelectorAll = require('../');
    var jsdom = require("jsdom").jsdom;
    var doc = jsdom('<html><div id="t"><span>1</span><span>2</span></div></html>');
    var time = Date.now();
    console.log(doc.querySelectorAll('#t span', doc).length);
    console.log(doc.querySelectorAll('#t span', doc)[0].innerHTML);
    console.log(Date.now()-time);
    time = Date.now();
    console.log(querySelectorAll('#t span', doc).length);
    console.log(querySelectorAll('#t span', doc)[0].innerHTML);
    console.log(Date.now()-time);
})();