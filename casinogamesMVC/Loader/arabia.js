$(document).ready(function () {
    var oMain = new CMain({
        win_occurrence: 15,       //WIN PERCENTAGE.SET A VALUE FROM 0 TO 100.
        slot_cash: 10,          //THIS IS THE CURRENT SLOT CASH AMOUNT. THE GAME CHECKS IF THERE IS AVAILABLE CASH FOR WINNINGS.
        min_reel_loop: 0,          //NUMBER OF REEL LOOPS BEFORE SLOT STOPS  
        reel_delay: 6,            //NUMBER OF FRAMES TO DELAY THE REELS THAT START AFTER THE FIRST ONE
        time_show_win: 2000,       //DURATION IN MILLISECONDS OF THE WINNING COMBO SHOWING
        time_show_all_wins: 1000, //DURATION IN MILLISECONDS OF ALL WINNING COMBO
        money: credito,                //STARING CREDIT FOR THE USER
        freespin_occurrence: 0,   //IF USER MUST WIN, SET THIS VALUE FOR FREESPIN OCCURRENCE
        bonus_occurrence: 33,       //IF USER MUST WIN, SET THIS VALUE FOR BONUS OCCURRENCE
        freespin_symbol_num_occur: [50, 30, 20],//WHEN PLAYER GET FREESPIN, THIS ARRAY GET THE OCCURRENCE OF RECEIVING 3,4 OR 5 FREESPIN SYMBOLS IN THE WHEEL
        num_freespin: [4, 6, 8],     //THIS IS THE NUMBER OF FREESPINS IF IN THE FINAL WHEEL THERE ARE 3,4 OR 5 FREESPIN SYMBOLS
        bonus_prize: [5, 10, 30, 50, 0, 10, 20, 60, 50, 0, 20, 10, 20, 5, 0, 80, 60, 40, 80, 0],//THIS IS THE LIST OF BONUS PRIZES. KEEP BEST PRIZE IN PENULTIMATE POSITION IN ARRAY
        bonus_prize_occur: [6, 6, 6, 5, 6, 5, 4, 3, 5, 5, 5, 6, 7, 5, 4, 4, 5, 1, 5, 4],//OCCURRENCE FOR EACH PRIZE IN BONUS_PRIZES. HIGHER IS THE NUMBER, MORE POSSIBILITY OF OUTPUTHAS THE PRIZE
        coin_bet: [0.05, 0.1, 0.15, 0.20, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5], //COIN BET VALUES
        num_spin_ads_showing: 10,     //NUMBER OF SPIN TO COMPLETE, BEFORE TRIGGERING AD SHOWING.
        check_orientation: true //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
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