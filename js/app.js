$(function(){


  var player;
  var computer;
  var playerMove;
  var computerMove;
  var randomPlay;
  var randomCircle;
  var playerScore;
  var computerScore;
//colours array
var colours = ["blue","green","yellow","pink","lime","orange","black","purple","cyan","firebrick","deepskyblue","gold","midnightblue","orangered","darkgreen","maroon","hotpink","palegreen","tan","deeppink","blueviolet","dimgray","crimson","darkorange"]

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
  computerRandomCells();
}
//this function will generate random circles
function genRandomCircles() {
  var shuffledArray = shuffle(colours);
  //loop over the number of circles we want to generate
  // and inside the loop will append a circle to the dom
  $.each($("td"), function(i, element){
    $(element).attr("data-color",shuffledArray[i])
  }); 
}
function listenToClicksOnCells(){
  $("td").on("click", function(){
    //in this callback function, "this" corresponds to the element where the event happened 
    $td = $(this);
    var tdColor = $td.attr("data-color");
    $(this).addClass(tdColor);
    // we need to assign tdColor to the class attribute of "this"
  })
}
//this function will increase the number of circles displayed
function computerRandomCells() {
  var $tds = shuffle($("td"));
    var thirdFirstElements = $tds.splice(0,3); // splice is a native js function
    $.each(thirdFirstElements, function(index, singleHtmlTdTag){
      var tdColor = $(singleHtmlTdTag).attr("data-color");
      $(singleHtmlTdTag).addClass(tdColor);
    })

    setTimeout(function(){
      console.log(thirdFirstElements)
      $.each(thirdFirstElements, function(index, singleHtmlTdTag){
        var tdColor = $(singleHtmlTdTag).attr("data-color");
        $(singleHtmlTdTag).removeClass(tdColor);
      })
    }, 1500);
}

//this function will change the colour location???
function changeCircleLoc() {

}
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




