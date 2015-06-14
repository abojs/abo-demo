'use strict';

var demo = require('../');

describe('Abo demo', function() {
  it('setup function of the experiment is executed', function(done) {
    var expt = {
      setup: done
    };

    demo(expt);
  });
});
