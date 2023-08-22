$(document).ready(function () {
    var oMain = new CMain({
        win_occurrence: 15,        //WIN PERCENTAGE.SET A VALUE FROM 0 TO 100.
        slot_cash: 10,          //THIS IS THE CURRENT SLOT CASH AMOUNT. THE GAME CHECKS IF THERE IS AVAILABLE CASH FOR WINNINGS.
        min_reel_loop: 2,          //NUMBER OF REEL LOOPS BEFORE SLOT STOPS  
        reel_delay: 6,            //NUMBER OF FRAMES TO DELAY THE REELS THAT START AFTER THE FIRST ONE
        time_show_win: 1000,       //DURATION IN MILLISECONDS OF THE WINNING COMBO SHOWING
        time_show_all_wins: 1000, //DURATION IN MILLISECONDS OF ALL WINNING COMBO
        money: credito,             //STARING CREDIT FOR THE USER
        ad_show_counter: 3,         //NUMBER OF SPIN PLAYED BEFORE AD SHOWING
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