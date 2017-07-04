/* There will be four crystals displayed as buttons on the page. Each of these crystals will, secretly, be assigned a number valued between 1 - 12. */
var numberOptions = [ 0, 0, 0, 0];
var counter = 0;
var goal = 0;
var pickAgain;
var wins = 0;
var losses = 0;

// The player will be shown a random number at the start of the game. This number is called targetNumber.
// The random number shown at the start of the game should be between 19 - 120.
function goalNumber(a){
  a = Math.floor(Math.random()*100)+20;
  return a;
}

function MyFunction(b){
	b = Math.floor(Math.random()*12)+1;
	console.log(b);
	return b;
}
$(document).ready(function(){
  targetNumber = goalNumber(goal);
  $("#number-to-guess").text(targetNumber);

  for(var i = 0; i < numberOptions.length; i++){
  	var pick;
  	numberOptions[i] = MyFunction(pick);
  }

  do {
  	var k = 0;
  	if((numberOptions[0] === numberOptions[1]) || (numberOptions[0] === numberOptions[2]) || (numberOptions[0] === numberOptions[3])){
  		numberOptions[0] = MyFunction(pickAgain);
  		k++;
  	} else if((numberOptions[1] === numberOptions[2]) || (numberOptions[1] === numberOptions[3])){
  		numberOptions[1] = MyFunction(pickAgain);
  		k++;
  	} else if(numberOptions[2] === numberOptions[3]){
  		numberOptions[2] = MyFunction(pickAgain);
  		k++;
  	}
  } while(k > 0)

  /* Cheater code
  for(var j = 0; j < numberOptions.length; j++){
  	console.log(numberOptions[j]);
  }
  */

  //Numbers are assigned to each crystal.
  for (var j = 0; j < numberOptions.length; j++) {
  	var crystalImage = $("<img>");
  	crystalImage.addClass("crystal-image");
  	crystalImage.attr("src", "assets/images/image" + j.toString() + ".jpg");
      $("#crystals").append(crystalImage);	
      // Each imageCrystal will be given a data attribute called data-crystalValue. This data attribute will be set equal to the array value.
      crystalImage.attr("data-crystalvalue", numberOptions[j]);
  }

  /*
  Your game will hide this amount until the player clicks a crystal.
  When they do click one, the player's score counter is updated.
  The player loses if their score goes above the random number.*/

  /*
  When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
  The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
  */

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#scoreBox").text(counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (counter === targetNumber) {
    	//The player wins if their total score matches the random number from the beginning of the game.
      wins++;
      $("#wins").text("Wins: " + wins);
    }
    else if (counter >= targetNumber) {
    	losses++;
      $("#losses").text("Losses: " + losses);
    }
    if ((counter === targetNumber) || (counter >= targetNumber)){
      targetNumber = goalNumber(goal);
      $("#number-to-guess").text(targetNumber);
      numberOptions = [ 0, 0, 0, 0];
    }
  });
});  