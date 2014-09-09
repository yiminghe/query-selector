(function () {
    var querySelectorAll = require('../');
    var jsdom = require("jsdom").jsdom;
    var doc = jsdom('<html><div id="t"><span>1</span><span>2</span></div></html>');
    console.log(querySelectorAll('#t span', doc).length);
    console.log(querySelectorAll('#t span', doc)[0].innerHTML);
})();