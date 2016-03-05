var count = 0;

function cc(card){
  var arr = [10, "J", "Q", "K", "A"];
  
  if(card >= 2 && card <= 6){
    count++;
  }else if(arr.indexOf(card) !== -1){
    count--;
  }

  var thing = (count > 0) ? count + " Bet": count + " Hold";
  return thing;
}

console.log(cc("J"));
console.log(cc(6));
console.log(cc(2));