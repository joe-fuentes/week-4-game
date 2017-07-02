// The player will be shown a random number at the start of the game. This number is called targetNumber.
// The random number shown at the start of the game should be between 19 - 120.
var targetNumber = Math.floor(Math.random()*100)+20;
$("#number-to-guess").text(targetNumber);

/* There will be four crystals displayed as buttons on the page. Each of these crystals will, secretly, be assigned a number valued between 1 - 12. */
var numberOptions = [ 0, 0, 0, 0];
var counter1 = 0;
var counter2 = 0;

//To avoid duplication, the values of 1 thru 12 are initialized to false prior to being chosen.
//Values for each crystal are pre-assigned here.

//Here, 4 numbers are to be chosen from numbers 1 to 12 to be assigned to each crytals.
for(counter1 = 0; counter1 < numberOptions.length; counter1++) {
	for (counter2 = 0; counter2 < numberOptions.lenght; counter2++) {
		if((numberOptions[counter1] === 0) && (numberOptions[counter1] === numberOptions[counter2])) {
			numberOptions[counter1] = Math.floor(Math.random()*12)+1;
			alert(numberOptions[counter1]);
			console.log(numberOptions[counter1]);
		}
	}
}
//Numbers are assigned to each crystal.
for (var j = 0; j < numberOptions.length; j++) {
	var crystalImage = $("<img>");
	crystalImage.addClass("crystal-image");
	crystalImage.attr("src", "assets/images/image" + j.toString() + ".jpg");
    $("#crystals").append(crystalImage);
	
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    crystalImage.attr("data-crystalvalue", numberOptions[j]);
}
/*When the player clicks on a crystal, it will add a specific amount of points to the player's total score.*/
/*for (var k=0; k<numberOptions.length; k++){
	console.log(numberOptions[k]);
}*/
/*var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
$(".crystal-image").on("click", function() {
	alert("the number is: " crystalValue);
});*/
/*
Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
*/