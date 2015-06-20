var chai = require('chai');

window.chai   = chai;
window.expect = chai.expect;
window.assert = chai.assert;

mocha.setup("bdd");

require([
  "test/spec/index"
], function() {
  mocha.run();
});
