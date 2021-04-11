// Code your solutions in this file
//
// function writeCards() {
//   let a = (["Ada", "Brendan", "Ali"], "birthday");
//   for ( let i = 0 ; i < a[0].length ; i++) {
//     console.log(`thank u ${a[i]} for the wonderful ${a[1]}  gift!`);
//   };return a;
// }; 
  let gratitudeCard = [];
function writeCards(listFriends, celebratedDay){
  
    for (let i=0; i<listFriends.length;i++){
      gratitudeCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`);
    }

    return gratitudeCard;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

<<<<<<< HEAD


 function countDown(){

  let i = 10;
    while (i >=  0 ) {
      console.log(i);
      i--;
}
 }
=======
countDown(10)
const countDown= 10;

while (countDown > 10) {
  console.log(countDown);
console.log(countDown --);
}
>>>>>>> d60c33f996784e67c5093b3fca88fe5de4e9d869
