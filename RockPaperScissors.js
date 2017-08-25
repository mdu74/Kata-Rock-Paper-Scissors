function RockPaperScissors(choose, opponent) {
    var opponentResult = getResultFromOpponent(opponent);
    if (opponentResult == "Scissors" && choose == "Rock")
        return "Win";
	
    if (opponentResult == "Rock" && choose == "Scissors")
        return "Loose";
	
    if (opponentResult == "Paper" && choose == "Scissors")
        return "Win";
	
    if (opponentResult == "Scissors" && choose == "Paper")
        return "Loose";
	
    if (opponentResult == "Rock" && choose == "Paper")
        return "Win";
	
    if (opponentResult == "Paper" && choose == "Rock")
        return "Loose";
    return "Draw";
}

function getResultFromOpponent(opponent) {
    return opponent.getResult();
}

function RandomResultOpponent() {
    var self = this;
    self.getResult = getRandomResult();

    function getRandomResult() {
        var opponentOptions = ["Rock", "Paper", "Scissors"];
        var randomResult = opponentOptions[Math.floor(Math.random() * opponentOptions.length)];
        return randomResult;
    }
}