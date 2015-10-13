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
  var quantityOfClicks = 0;
  
var colours = ["red","blue","green","yellow","pink","lime","orange","black","purple","cyan","firebrick","deepskyblue","gold","midnightblue","orangered","darkgreen","maroon","hotpink","palegreen","tan","deeppink","blueviolet","dimgray","crimson","darkorange"]
var cellsPerLevel = [2,3,4,5,6]
var currentLevelcells = [];
var currentLevelClickedCells = [];

function resetLevels(){
  cellsPerLevel = [2,3,4,5,6]
}

function shuffle(array) {
  var counter = array.length, temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
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
  computerRandomCellsLevel(cellsPerLevel.shift())
}
function listenToClicksOnCells(){
  $("td").on("click", function(){
    //in this callback function, "this" corresponds to the element where the event happened 
    $td = $(this);
    quantityOfClicks++

    var tdColor = $td.attr("data-color");
    $(this).addClass(tdColor);
    // we need to assign tdColor to the class attribute of "this"

    currentLevelClickedCells.push(tdColor)
  if(quantityOfClicks == currentLevelcells.length){
      if(!checkWin()){ // lost
        resetLevels()
      } 
      $("td").removeClass()
      computerRandomCellsLevel(cellsPerLevel.shift())
    }
  })
}
//this function will increase the number of circles displayed
function computerRandomCellsLevel(howManyCells) {
  var $tds = shuffle($("td"));
  var FirstElements = $tds.splice(0,howManyCells); // splice is a native js function
  $.each(FirstElements, function(i, singleHtmlTdTag){
    var tdColor = $(singleHtmlTdTag).attr("data-color");
    currentLevelcells.push(tdColor);
    var delay = 500*(i+2);
    setTimeout(function(tag){
      $(tag).addClass(tdColor);
    }, delay, singleHtmlTdTag);

    setTimeout(function(tag){
      $(tag).removeClass(tdColor);
    }, delay+1000, singleHtmlTdTag);
  });


}
//need to remmember the quantity of clicks made by the user, 
//when the number of clicks is equal to the number of cells for this level
// then run chkWin

//  var numOfClicks;
//  if {numOfClicks = currentLevelClickedCel//}

  // setTimeout(function(){
  //   $.each(FirstElements, function(index, singleHtmlTdTag){
  //     var tdColor = $(singleHtmlTdTag).attr("data-color");
  //     $(singleHtmlTdTag).removeClass(tdColor);
  //   })
  // }, 1500);
  //return computerRandomCellsLevel2();

function checkWin(){
  console.log(currentLevelcells);
  console.log(currentLevelClickedCells);
  if(currentLevelClickedCells.toString() == currentLevelcells.toString()){
    alert("YOU WIN");
    return true;
  }else{
    alert("LOOSER")
    location.reload();
    return false;
  }
}

window.checkWin = checkWin;

 
startGame()

});




