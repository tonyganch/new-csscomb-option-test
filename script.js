// Require:
var Comb = require('csscomb-core');
var ruleJoiner = require('./rule-joiner/rule-joiner.js');

// Configure:
var comb = new Comb([ruleJoiner], 'css');

var css = '#a,  .b  {\n  width: 10px\n}\n#a,.b{\n  /*z*/foo:bar\n}\n/* hey ho */\n.b, #a {\n  bar: baz; \n}'

var result = comb
    .configure({
        'rule-joiner': true
    })
    .processString(css, 'css')

console.log(result);
