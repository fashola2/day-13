/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//let a = parseInt("5")
//let numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]


function handValue (hands) {
let card = 0
let hand = 0
for (var i = 0; i < hands.length; i++) {
  if (hands[i] === "K" || hands[i] === "J" || hands[i] === "Q") {
   card = 10
   hand += card
 } else if (hands[i] === "A") {
     card = 11
     hand += card
   } else {
     hand = hand + parseInt(hands[i])
   } if (hand > 21) {
      hand  -= 10 
   }
}
console.log(hand);
  return hand;
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
