(function () {

  'use strict';

  // Assert Function
  function assert(hands, value) {
    let output = handValue(hands);
    console.assert(output === value, `Expecting ${output} to be ${value}`);
  }

  // Blackjack Hand Tests
  // Hand, Value
  assert(["2", "2", "8"], 12);
  assert(["2", "2", "K"], 14);
  assert(["2", "Q"], 12);
  assert(["7", "J"], 17);
  assert(["7", "A"], 18);
  assert(["8", "J", "A"], 19);
  assert(["8", "A", "J"], 19);
  assert(["8", "7", "A", "A"], 17);
  assert(["K", "A"], 21);
})();
