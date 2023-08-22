$(document).ready(function () {
    var oMain = new CMain({
        money: credito, //STARING CREDIT FOR THE USER
        min_bet: 0.1, //MINIMUM BET
        max_bet: 400, //MAXIMUM BET
        time_bet: 0, //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
        time_winner: 1000, //TIME FOR WINNER SHOWING IN MILLISECONDS
        win_occurrence: 30, //Win occurrence percentage (100 = always win).
        //SET THIS VALUE TO -1 IF YOU WANT WIN OCCURRENCE STRICTLY RELATED TO PLAYER BET ( SEE DOCUMENTATION)
        casino_cash: 100, //The starting casino cash that is recharged by the money lost by the user
        num_hand_before_ads: 10 //NUMBER OF HANDS TO COMPLETE, BEFORE TRIGGERING SAVE_SCORE EVENT. USEFUL FOR INTER-LEVEL AD EVENTUALLY.
    });

    $(oMain).on("recharge", function (evt) {

    });

    commonsEvents(oMain);

    if (isIOS()) {
        setTimeout(function () {
            sizeHandler();
        }, 200);
    } else {
        sizeHandler();
    }
});
