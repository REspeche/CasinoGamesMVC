$(document).ready(function () {
    var oMain = new CMain({
        win_occurrence: 20,        //WIN PERCENTAGE.SET A VALUE FROM 0 TO 100.
        slot_cash: 10,          //THIS IS THE CURRENT SLOT CASH AMOUNT. THE GAME CHECKS IF THERE IS AVAILABLE CASH FOR WINNINGS.
        bonus_occurrence: 30,      //SET BONUS OCCURRENCE PERCENTAGE IF PLAYER GET A WIN. SET A VALUE FROM 0 TO 100. (IF 100%, PLAYER GET A BONUS EVERYTIME THERE IS A WIN).
        min_reel_loop: 1,          //NUMBER OF REEL LOOPS BEFORE SLOT STOPS  
        reel_delay: 0,            //NUMBER OF FRAMES TO DELAY THE REELS THAT START AFTER THE FIRST ONE
        time_show_win: 1000,       //DURATION IN MILLISECONDS OF THE WINNING COMBO SHOWING
        time_show_all_wins: 1000, //DURATION IN MILLISECONDS OF ALL WINNING COMBO
        money: credito,               //STARING CREDIT FOR THE USER
        min_bet: 0.05,             //MINIMUM COIN FOR BET
        max_bet: 0.5,             //MAXIMUM COIN FOR BET
        max_hold: 3,               //MAXIMUM NUMBER OF POSSIBLE HOLD ON REELS
        perc_win_prize_1: 90,       //OCCURENCE PERCENTAGE FOR PRIZE 1 IN BONUS
        perc_win_prize_2: 10,       //OCCURENCE PERCENTAGE FOR PRIZE 2 IN BONUS
        perc_win_prize_3: 0,       //OCCURENCE PERCENTAGE FOR PRIZE 3 IN BONUS
        num_symbol_bonus: 3,        //NUMBER OF BONUS SYMBOLS (DEFAULT IS SYMBOL 9) THAT MUST BE SHOWN TO ACHIEVE THE BONUS PANEL
        fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        num_spin_ads_showing: 10     //NUMBER OF SPIN TO COMPLETE, BEFORE TRIGGERING AD SHOWING.
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