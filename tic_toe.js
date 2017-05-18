var player = 1;

function clickBtn(btn) {
  if(player === 1){
  document.getElementById(btn).value = "X";
  document.getElementById(btn).disabled = "disabled";
  player -= 1;
  winner();
} else {
  document.getElementById(btn).value = "O";
  document.getElementById(btn).disabled = "disabled";
  player += 1;
  winner();
}
}

function winner(){
  if (document.getElementById("btn1").value === "X" &&
      document.getElementById("btn2").value === "X" &&
      document.getElementById("btn3").value === "X" ||
      document.getElementById("btn4").value === "X" &&
      document.getElementById("btn5").value === "X" &&
      document.getElementById("btn6").value === "X" ||
      document.getElementById("btn7").value === "X" &&
      document.getElementById("btn8").value === "X" &&
      document.getElementById("btn9").value === "X" ||
      document.getElementById("btn1").value === "X" &&
      document.getElementById("btn4").value === "X" &&
      document.getElementById("btn7").value === "X" ||
      document.getElementById("btn2").value === "X" &&
      document.getElementById("btn5").value === "X" &&
      document.getElementById("btn8").value === "X" ||
      document.getElementById("btn3").value === "X" &&
      document.getElementById("btn6").value === "X" &&
      document.getElementById("btn9").value === "X" ||
      document.getElementById("btn1").value === "X" &&
      document.getElementById("btn5").value === "X" &&
      document.getElementById("btn9").value === "X" ||
      document.getElementById("btn3").value === "X" &&
      document.getElementById("btn5").value === "X" &&
      document.getElementById("btn7").value === "X"
    ) {
        alert("Congratulations! X is the Winner!!!");
        reset();
      }

      if (
        document.getElementById("btn1").value === "O" &&
        document.getElementById("btn2").value === "O" &&
        document.getElementById("btn3").value === "O" ||
        document.getElementById("btn4").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn6").value === "O" ||
        document.getElementById("btn7").value === "O" &&
        document.getElementById("btn8").value === "O" &&
        document.getElementById("btn9").value === "O" ||
        document.getElementById("btn1").value === "O" &&
        document.getElementById("btn4").value === "O" &&
        document.getElementById("btn7").value === "O" ||
        document.getElementById("btn2").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn8").value === "O" ||
        document.getElementById("btn3").value === "O" &&
        document.getElementById("btn6").value === "O" &&
        document.getElementById("btn9").value === "O" ||
        document.getElementById("btn1").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn9").value === "O" ||
        document.getElementById("btn3").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn7").value === "O"
      ) {
        alert("Congratulations! O is the Winner!!!");
        reset();
      }

      if (
        document.getElementById("btn1").value != "" &&
        document.getElementById("btn2").value != "" &&
        document.getElementById("btn3").value != "" &&
        document.getElementById("btn4").value != "" &&
        document.getElementById("btn5").value != "" &&
        document.getElementById("btn6").value != "" &&
        document.getElementById("btn7").value != "" &&
        document.getElementById("btn8").value != "" &&
        document.getElementById("btn9").value != ""
        ){
          alert("It's a draw!");
          reset();
        }
}

function reset(){
  document.getElementById("btn1").value = "";
  document.getElementById("btn2").value = "";
  document.getElementById("btn3").value = "";
  document.getElementById("btn4").value = "";
  document.getElementById("btn5").value = "";
  document.getElementById("btn6").value = "";
  document.getElementById("btn7").value = "";
  document.getElementById("btn8").value = "";
  document.getElementById("btn9").value = "";
  document.getElementById("btn1").disabled = "";
  document.getElementById("btn2").disabled  = "";
  document.getElementById("btn3").disabled  = "";
  document.getElementById("btn4").disabled  = "";
  document.getElementById("btn5").disabled  = "";
  document.getElementById("btn6").disabled  = "";
  document.getElementById("btn7").disabled  = "";
  document.getElementById("btn8").disabled  = "";
  document.getElementById("btn9").disabled  = "";
}















// var mainBox = [['','',''],['','',''],['','','']];
// var player = 1;
// var player1Score = 0;
// var player2Score = 0;
//
// var selectBox = function(row,column){
//   if(player === 1) {
//     mainBox[row][column] = 1;
//     player = 2;
//   } else if(player === 2){
//     mainBox[row][column] = 2;
//     player = 1;
//   }
// };
//
// var totalScore = function(score){
//   if (mainBox[0][0] + mainBox[0][1] + mainBox[0][2] === score ||
//       mainBox[1][0] + mainBox [1][1] + mainBox[1][2] === score ||
//       mainBox[2][0] + mainBox [2][1] + mainBox[2][2] === score ||
//       mainBox[0][0] + mainBox [1][0] + mainBox[2][0] === score ||
//       mainBox[0][1] + mainBox [1][1] + mainBox[2][1] === score ||
//       mainBox[0][2] + mainBox [1][2] + mainBox[2][2] === score ||
//       mainBox[0][0] + mainBox [1][1] + mainBox[2][2] === score ||
//       mainBox[2][0] + mainBox [1][1] + mainBox[0][2] === score ){
//       return true;
//     }
// }
//
// var player1Wins = function(score){
//   if(totalScore(3)){
//     alert("Congratulations: Player 1 Wins!");
//     win = true;
//     player1Score ++;
//   }
// };
//
// var player2Wins = function(score){
//   if(totalScore(6)){
//     alert("Congratulations: Player 2 Wins!");
//     win = true;
//     player2Score ++;
//   }
// };
//
// function render() {
//   context.font = "bold 30px helvetica";
//   context.fillText(player1Score, 20, 20);
// }
//
// var totalWinner = function(total){
//   if(player1Score === 3) {
//     alert("Player 1 is the overall Winner!");
//   } else if(player2Score === 3) {
//     alert("Player 2 is the overall Winner!");
//   }
// }
// var playerDraw = function(score){
//   if (player1Wins && player2Wins) {
//     alert("It's a draw");
//     // win = false;
//   }
// };
//
// var box1 = document.querySelector(".box1");
// var box2 = document.querySelector(".box2");
// var box3 = document.querySelector(".box3");
// var box4 = document.querySelector(".box4");
// var box5 = document.querySelector(".box5");
// var box6 = document.querySelector(".box6");
// var box7 = document.querySelector(".box7");
// var box8 = document.querySelector(".box8");
// var box9 = document.querySelector(".box9");
// var button = document.querySelector(".play_again");
// // var container = document.querySelector(".container");
//
// box1.addEventListener('click', function(){
//   if((box1.style.backgroundColor === 'red') || (box1.style.backgroundColor === 'blue')) {
//     alert("Please select different box!");
//     selectBox(0,0);
//     player1Wins();
//     player2Wins();
//
//   } else if (player === 1){
//     box1.style.backgroundColor = 'red';
//   }
//     else if (player === 2){
//     box1.style.backgroundColor = 'blue';
//   } else {
//     box1.style.backgroundColor = 'skyblue';
//   };
//   selectBox(0,0);
//   player1Wins();
//   player2Wins();
//
//   });
//
// box2.addEventListener('click', function(){
//   if((box2.style.backgroundColor === 'red') || (box2.style.backgroundColor === 'blue')) {
//     alert("Please select different box!");
//     selectBox(0,1);
//     player1Wins();
//     player2Wins();
//     reset();
//   } else if (player === 1){
//     box2.style.backgroundColor = 'red';
//   }
//     else if (player === 2){
//     box2.style.backgroundColor = 'blue';
//   } else {
//     box2.style.backgroundColor = 'skyblue';
//   };
//   selectBox(0,1);
//   player1Wins();
//   player2Wins();
//   reset();
//   });
//
// box3.addEventListener('click', function(){
//   if((box3.style.backgroundColor === 'red') || (box3.style.backgroundColor === 'blue')) {
//     alert("Please select different box!");
//     selectBox(0,2);
//     player1Wins();
//     player2Wins();
//     reset();
//     } else if (player === 1){
//     box3.style.backgroundColor = 'red';
//     }
//       else if (player === 2){
//       box3.style.backgroundColor = 'blue';
//     } else {
//       box3.style.backgroundColor = 'skyblue';
//     };
//     selectBox(0,2);
//     player1Wins();
//     player2Wins();
//     reset();
//     });
//
// box4.addEventListener('click', function(){
//   if((box4.style.backgroundColor === 'red') || (box4.style.backgroundColor === 'blue')) {
//     alert("Please select different box!");
//     selectBox(1,0);
//     player1Wins();
//     player2Wins();
//     reset();
//     } else if (player === 1){
//       box4.style.backgroundColor = 'red';
//       }
//         else if (player === 2){
//         box4.style.backgroundColor = 'blue';
//       } else {
//         box4.style.backgroundColor = 'skyblue';
//       };
//         selectBox(1,0);
//         player1Wins();
//         player2Wins();
//         reset();
//         });
//
// box5.addEventListener('click', function(){
//   if((box5.style.backgroundColor === 'red') || (box5.style.backgroundColor === 'blue')) {
//     alert("Please select different box!");
//     selectBox(1,1);
//     player1Wins();
//     player2Wins();
//     reset();
//       } else if (player === 1){
//         box5.style.backgroundColor = 'red';
//         }
//           else if (player === 2){
//           box5.style.backgroundColor = 'blue';
//         } else {
//           box5.style.backgroundColor = 'skyblue';
//         };
//         selectBox(1,1);
//         player1Wins();
//         player2Wins();
//         reset();
//         });
//
// box6.addEventListener('click', function(){
//   if((box6.style.backgroundColor === 'red') || (box6.style.backgroundColor === 'blue')) {
//       alert("Please select different box!");
//       selectBox(1,2);
//       player1Wins();
//       player2Wins();
//       reset();
//         } else if (player === 1){
//           box6.style.backgroundColor = 'red';
//           }
//             else if (player === 2){
//             box6.style.backgroundColor = 'blue';
//           } else {
//             box6.style.backgroundColor = 'skyblue';
//           };
//           selectBox(1,2);
//           player1Wins();
//           player2Wins();
//           reset();
//           });
//
//
// box7.addEventListener('click', function(){
//     if((box7.style.backgroundColor === 'red') || (box7.style.backgroundColor === 'blue')) {
//       alert("Please select different box!");
//       selectBox(2,0);
//       player1Wins();
//       player2Wins();
//       reset();
//         } else if (player === 1){
//           box7.style.backgroundColor = 'red';
//             }
//               else if (player === 2){
//               box7.style.backgroundColor = 'blue';
//             } else {
//               box7.style.backgroundColor = 'skyblue';
//             };
//             selectBox(2,0);
//             player1Wins();
//             player2Wins();
//             reset();
//             });
//
//
// box8.addEventListener('click', function(){
//     if((box8.style.backgroundColor === 'red') || (box8.style.backgroundColor === 'blue')) {
//       alert("Please select different box!");
//       selectBox(2,1);
//       player1Wins();
//       player2Wins();
//       reset();
//         } else if (player === 1){
//           box8.style.backgroundColor = 'red';
//           }
//             else if (player === 2){
//             box8.style.backgroundColor = 'blue';
//           } else {
//             box8.style.backgroundColor = 'skyblue';
//           }
//               selectBox(2,1);
//               player1Wins();
//               player2Wins();
//               reset();
//               });
//
// box9.addEventListener('click', function(){
//   if((box9.style.backgroundColor === 'red') || (box9.style.backgroundColor === 'blue')) {
//     alert("Please select different box!");
//     selectBox(2,2);
//     player1Wins();
//     player2Wins();
//     reset();
//   } else{
//           if (player === 1){
//             box9.style.backgroundColor = 'red';
//                 }
//                   else if (player === 2){
//                   box9.style.backgroundColor = 'blue';
//                 } else {
//                   box9.style.backgroundColor = 'skyblue';
//                 }}
//                 selectBox(2,2);
//                 player1Wins();
//                 player2Wins();
//                 });
//
// button.onclick = function() {
//   alert("Thanks for playing!");
//   location.href = "tic_toe.html";
// }
