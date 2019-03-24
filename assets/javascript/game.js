//execute as soon as the page is loading
$(document).ready(function(){

//global variables
var randomNumber;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var userGuess;
var wins = 0;
var losses = 0;


//function to run to start the game once the page loads or reload once the game has been won or lost, reset stored info

function initializeGame () {
    //Math.floor(Math.random()*(max-min+1)+min);
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19); 
    $("#random-Number").html(randomNumber);
    //Random numbers for crystals, also console.log it out
    crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1); 
    console.log("crystal one: " + crystalOne);
    crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1); 
   console.log("crystal two: " + crystalTwo);
    crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1); 
    console.log("crystal three: " + crystalThree);
    crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1); 
   console.log("crystal four: " + crystalFour);
   //To do: make initialize reset values under the crystals
   $("#crystal1").html("");
   $("#crystal2").html("");
   $("#crystal3").html("");
   $("#crystal4").html("");
    
    userGuess = 0;
    $("#user-Guess").html(userGuess);
   
    return randomNumber, crystalOne, crystalTwo, crystalThree, crystalFour;
};

//Function to activate when user user clicks image
$("#cImage1").on("click", function() {
        //console.log the value of the crystal that was clicked on
        console.log("This is the first crystal number: " + crystalOne);
        //Add crystal value to userGuess
        userGuess = parseInt(userGuess + crystalOne); 
        //console.log userGuess
        console.log(userGuess);
        //Update userGuess to the DOM
        $("#user-Guess").html(userGuess);
        //After click, add crystal value underneath each picture.
        $("#crystal1").html(crystalOne);
        //conditional to determine if user won, and increment wins. Console.log wins. Update the DOM.
        if (userGuess == randomNumber){
            $("#user-Guess").html("<h1>YOU WIN!</h1>");
            console.log("You won!");
            initializeGame();
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
        } 
        //conditional to determine if user lost, and increment losses. Console.log losses. Update the DOM.
        else if (userGuess > randomNumber){
            $("#user-Guess").html("<h1>YOU LOSE!</h1>");
            console.log("You lose!");
            initializeGame();
            losses++;
            $("#losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
        }
    })

//Function to activate when user user clicks image
$("#cImage2").on("click", function() {
    console.log("This is the second crystal number: " + crystalTwo);
        userGuess = parseInt(userGuess + crystalTwo); 
        console.log(userGuess);
        $("#user-Guess").html(userGuess);
        //After click, add crystal value underneath each picture.
        $("#crystal2").html(crystalTwo);
        if (userGuess == randomNumber){
            $("#user-Guess").html("<h1>YOU WIN!</h1>");
            console.log("You won!");
            initializeGame();
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
        } else if (userGuess > randomNumber){
            $("#user-Guess").html("<h1>YOU LOSE!</h1>");
            console.log("You lose!");
            initializeGame();
            losses++;
            $("#losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
        }
})

//Function to activate when user user clicks image
$("#cImage3").on("click", function() {
    console.log("This is the third crystal number: " + crystalThree);
        userGuess = parseInt(userGuess + crystalThree); 
        console.log(userGuess);
        //After click, add crystal value underneath each picture.
        $("#crystal3").html(crystalThree);
        $("#user-Guess").html(userGuess);
        if (userGuess == randomNumber){
            $("#user-Guess").html("<h1>YOU WIN!</h1>");
            console.log("You won!");
            initializeGame();
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
        } else if (userGuess > randomNumber){
            $("#user-Guess").html("<h1>YOU LOSE!</h1>");
            console.log("You lose!");
            initializeGame();
            losses++;
            $("#losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
        }
    })

//Function to activate when user user clicks image
$("#cImage4").on("click", function() {
    console.log("This is the fourth crystal number: " + crystalFour);
        userGuess = parseInt(userGuess + crystalFour); 
        console.log(userGuess);
        //After click, add crystal value underneath each picture.
        $("#crystal4").html(crystalFour);
        $("#user-Guess").html(userGuess);
        if (userGuess == randomNumber){
            $("#user-Guess").html("<h1>YOU WIN!</h1>");
            console.log("You won!");
            initializeGame();
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
        } else if (userGuess > randomNumber){
            $("#user-Guess").html("<h1>YOU LOSE!</h1>");
            console.log("You lose!");
            initializeGame();
            losses++;
            $("#losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
        }
})



initializeGame();

});





