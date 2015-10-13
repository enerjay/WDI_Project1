$(function(){


  var player;
  var computer;
  var playerMove;
  var computerMove;
  var randomPlay;
  var randomCircle;
  var getPoint;
  var levelWinner;
  var playerScore = 0;
  var computerScore = 0;

var colours = ["blue","green","yellow","pink","lime","orange","black","purple","cyan","firebrick","deepskyblue","gold","midnightblue","orangered","darkgreen","maroon","hotpink","palegreen","tan","deeppink","blueviolet","dimgray","crimson","darkorange"]

var cellsPerLevel = [2,4,6,8,10]
var currentLevelcells = [];
var currentLevelClickedCells = [];

function shuffle(array) {
  var counter = array.length, temp, index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
//this funciton will start the game
function startGame(){
  genRandomCircles();
  listenToClicksOnCells();
  //computerRandomCellsLevel1();
  //levelWinner();
}
//this function will generate random circles
function genRandomCircles() {
  var shuffledArray = shuffle(colours);
  //loop over the number of circles we want to generate
  // and inside the loop will append a circle to the dom
  $.each($("td"), function(i, element){
    $(element).attr("data-color",shuffledArray[i])
  }); 
  // $.each(cellsPerLevel, function(i, howManyCells){
  //   computerRandomCellsLevel(howManyCells)
  // })
  computerRandomCellsLevel(2)
}
function listenToClicksOnCells(){
  $("td").on("click", function(){
    //in this callback function, "this" corresponds to the element where the event happened 
    $td = $(this);
    var tdColor = $td.attr("data-color");
    $(this).addClass(tdColor);
    // we need to assign tdColor to the class attribute of "this"

    currentLevelClickedCells.push(tdColor)
  })
}
//this function will increase the number of circles displayed
function computerRandomCellsLevel(howManyCells) {
  var $tds = shuffle($("td"));
  var FirstElements = $tds.splice(0,howManyCells); // splice is a native js function
  $.each(FirstElements, function(i, singleHtmlTdTag){
    var tdColor = $(singleHtmlTdTag).attr("data-color");
    currentLevelcells.push(tdColor);
    var delay = 500*(i+1);
    setTimeout(function(tag){
      $(tag).addClass(tdColor);
    }, delay, singleHtmlTdTag);

    setTimeout(function(tag){
      $(tag).removeClass(tdColor);
    }, delay+2000, singleHtmlTdTag);
  });


//need to remmember the quantity of clicks made by the user, 
//when the number of clicks is equal to the number of cells for this level
// then run checkWin()




  // setTimeout(function(){
  //   $.each(FirstElements, function(index, singleHtmlTdTag){
  //     var tdColor = $(singleHtmlTdTag).attr("data-color");
  //     $(singleHtmlTdTag).removeClass(tdColor);
  //   })
  // }, 1500);
  //return computerRandomCellsLevel2();
}




// function computerRandomCellsLevel1() {
//   var $tds = shuffle($("td"));
//     var thirdFirstElements = $tds.splice(0,2); // splice is a native js function
//     $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//       var tdColor = $(singleHtmlTdTag).attr("data-color");
//       $(singleHtmlTdTag).addClass(tdColor);
//     })
//     setTimeout(function(){
//       console.log(thirdFirstElements)
//       $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//         var tdColor = $(singleHtmlTdTag).attr("data-color");
//         $(singleHtmlTdTag).removeClass(tdColor);
//       })
//     }, 1500);
//     return computerRandomCellsLevel2();
// }
// function computerRandomCellsLevel2() {
//   var $tds = shuffle($("td"));
//     var thirdFirstElements = $tds.splice(0,4); 
//     $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//       var tdColor = $(singleHtmlTdTag).attr("data-color");
//       $(singleHtmlTdTag).addClass(tdColor);
//     })
//     setTimeout(function(){
//       console.log(thirdFirstElements)
//       $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//         var tdColor = $(singleHtmlTdTag).attr("data-color");
//         $(singleHtmlTdTag).removeClass(tdColor);
//       })
//     }, 1500);
// }
// function computerRandomCellsLevel3() {
//   var $tds = shuffle($("td"));
//     var thirdFirstElements = $tds.splice(0,6); 
//     $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//       var tdColor = $(singleHtmlTdTag).attr("data-color");
//       $(singleHtmlTdTag).addClass(tdColor);
//     })
//     setTimeout(function(){
//       console.log(thirdFirstElements)
//       $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//         var tdColor = $(singleHtmlTdTag).attr("data-color");
//         $(singleHtmlTdTag).removeClass(tdColor);
//       })
//     }, 1500);
// }
// function computerRandomCellsLevel4() {
//   var $tds = shuffle($("td"));
//     var thirdFirstElements = $tds.splice(0,8);
//     $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//       var tdColor = $(singleHtmlTdTag).attr("data-color");
//       $(singleHtmlTdTag).addClass(tdColor);
//     })
//     setTimeout(function(){
//       console.log(thirdFirstElements)
//       $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//         var tdColor = $(singleHtmlTdTag).attr("data-color");
//         $(singleHtmlTdTag).removeClass(tdColor);
//       })
//     }, 1500);
// }
// function computerRandomCellsLevel5() {
//   var $tds = shuffle($("td"));
//     var thirdFirstElements = $tds.splice(0,10); 
//     $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//       var tdColor = $(singleHtmlTdTag).attr("data-color");
//       $(singleHtmlTdTag).addClass(tdColor);
//     })
//     setTimeout(function(){
//       console.log(thirdFirstElements)
//       $.each(thirdFirstElements, function(index, singleHtmlTdTag){
//         var tdColor = $(singleHtmlTdTag).attr("data-color");
//         $(singleHtmlTdTag).removeClass(tdColor);
//       })
//     }, 1500);
// }

function checkWin(){
  console.log(currentLevelcells);
  console.log(currentLevelClickedCells);
  if(currentLevelClickedCells.toString() == currentLevelcells.toString()){
    alert("YOU WIN");
  }else{
    alert("LOOSER")
  }
}

window.checkWin = checkWin;
//function levelWinner() {
//  //$("thirdFirstElements").click(function() {
//    //$(this).data("clicked", true);
//  //});
//$ ("thirdFirstElements").on("click", function() {
//  if ($("this").on("click")) {
//    console.log("player");
//    }
//})
//else {
//  console.log("computer");
//}
//
//}

  
//if ($("thirdFirstElements").click(function() {
  //console.log("player wins")
//}
//else {
  //console.log("computer wins")
//}

  //if (playerMove === computerMove) {
  //playerScore++
  //return playerScore;
  //else if (playerMove !== computerMove) {
  //computerScore++
  //return computerScore;
  //
    


//$("td").on("click", function() {
//$(this).css("background-colour", "black")
//});
//testing clicking on the circles

  //alert("testing the clicking event");
  //console.log("testing");
//});

//$( ".red" ).click(function() {
  //$( ".red" ).hide( "slow", function() {
    //alert( "Animation complete." );
  //});
//});

//$("td" ).on( "click", function() {
  //$(this).css( "background-colour", "red" );

  //$( "td" ).each(function( index ) {
    //console.log( index + ": " + $( this ).text() );
  //});





startGame()

});




