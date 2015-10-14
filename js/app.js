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
  var cellsPerLevel = [2,3,4,5,6,7,8,9,10]
  var currentLevelcells = [];
  var currentLevelClickedCells = [];

  function resetLevels(){
    cellsPerLevel = [2,3,4,5,6,7,8,9,10]
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
  function startGame(){
    genRandomCircles();
    listenToClicksOnCells();  
  }
  function genRandomCircles() {
    var shuffledArray = shuffle(colours);
    $.each($("td"), function(i, element){
      $(element).attr("data-color",shuffledArray[i])
    }); 
    computerRandomCellsLevel(cellsPerLevel.shift())
  }
  function listenToClicksOnCells(){
    $("td").on("click", function(){
      $td = $(this);
      quantityOfClicks++
      var tdColor = $td.attr("data-color");
      $(this).addClass(tdColor);

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

  function computerRandomCellsLevel(howManyCells) {
    var $tds = shuffle($("td"));
    var FirstElements = $tds.splice(0,howManyCells); 
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

  function checkWin(){
    console.log(currentLevelcells);
    console.log(currentLevelClickedCells);
    if(currentLevelClickedCells.toString() == currentLevelcells.toString()){
      alert("YOU WIN");
      return true;
    }else{
      alert("YOU LOSE")
      location.reload();
      return false;
    }
  }

  window.checkWin = checkWin;


  startGame()

});




