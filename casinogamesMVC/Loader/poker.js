$(document).ready(function () {
    var oMain = new CMain({
        win_occurrence: 25, //WIN OCCURRENCE PERCENTAGE
        double_occurrence: 25, //OCCURRENCE FOR DOUBLE BET
        double_half_occurrence: 30, //OCCURRENCE FOR DOUBLE HALF BET
        game_cash: 50, //MONEY IN GAME CASH. IF THE GAME DOESN'T HAVE ENOUGHT MONEY, THE PLAYER MUST LOSE.
        bets: [0.2, 0.3, 0.5, 1, 2, 3, 5], //ALL THE AVAILABLE BETS FOR THE PLAYER
        limit_bet: 400, //MAXIMUM BET
        combo_prizes: [250, 200, 100, 50, 17, 7, 5, 3, 2, 1, 1], //WINS FOR FIRST COLUMN: Natural Royal Flush,
        //5 of a Kind, Royal Flush,Straight Flush, Four of a Kind, Full House,
        //Flush, Straight, Three of a Kind,Two Pair,Kings or Better
        money: credito, //STARING CREDIT FOR THE USER
        recharge: true, //RECHARGE WHEN MONEY IS ZERO. SET THIS TO FALSE TO AVOID AUTOMATIC RECHARGE
        fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        show_credits: true, //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
        num_hand_before_ads: 10 //NUMBER OF HANDS PLAYED BEFORE AD SHOWN
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
