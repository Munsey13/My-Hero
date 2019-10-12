$(document).ready(function(){



    var enemyScore = 0;
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    var didPlayerGetEnemyScore = false;
    var didPlayerPassEnemyScore = false;

    var dekuValue = 0;
    var kacchanValue = 0;
    var todorokiValue = 0;
    var urarakaValue = 0;



    function startHerosUniformGame() {

        playerScore = 0;
        enemyScore = Math.floor((Math.random() * 101) + 20);
        dekuValue = Math.floor((Math.random() * 12) +1);
        kacchanValue = Math.floor((Math.random() * 12) +1);
        todorokiValue = Math.floor((Math.random() * 12) +1);
        urarakaValue = Math.floor((Math.random() * 12) +1);
        didPlayerGetEnemyScore = false;
        didPlayerPassEnemyScore = false;

        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#player-score").html("Player Score: " + playerScore);

        newEnemyScore = $("#enemy-score").html("Enemy Score: " + enemyScore);

        // console.log(enemyScore)
    };

    function winnerWinner() {
        wins++;
        startHerosUniformGame();
    };

    function loserLoser() {
        losses++;
        startHerosUniformGame();
    }

    function winLoseOrContinue(){
        if (playerScore === enemyScore) {
            didPlayerGetEnemyScore = true;
            winnerWinner();
        } else if (playerScore > enemyScore){
            didPlayerPassEnemyScore = true;
            loserLoser();
        } else {
            didPlayerGetEnemyScore = false;
            didPlayerPassEnemyScore = false;
        }

    };

    $("#deku").on("click", function() {
        playerScore += dekuValue;
        $("#player-score").html("Player Score: " + playerScore);
        winLoseOrContinue();
    });

    $("#kacchan").on("click", function(){
        playerScore += kacchanValue;
        $("#player-score").html("Player Score: " + playerScore);
        winLoseOrContinue();
    });

    $("#todoroki").on("click", function(){
        playerScore += todorokiValue;
        $("#player-score").html("Player Score: " + playerScore);
        winLoseOrContinue();
    });

    $("#uraraka").on("click", function(){
        playerScore += urarakaValue;
        $("#player-score").html("Player Score: " + playerScore);
        winLoseOrContinue();
    });

    startHerosUniformGame();
});