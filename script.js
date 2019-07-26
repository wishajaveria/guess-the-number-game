let randomNumber;
let wrongGuessCount;

function resetGame(){
    randomNumber = Math.floor(Math.random() * 100);
    wrongGuessCount = 0;
}
resetGame();
function guessTheNumber(){
    let userInput = Math.floor(document.querySelector("input").value);

    if(userInput < randomNumber){
        alert("too small");
        wrongGuessCount++;
    }else if (userInput > randomNumber){
        alert("too big")
          wrongGuessCount++;

    }else{
        alert("congrat ! wrong guesses:" + wrongGuessCount);
        resetGame();
    }

}