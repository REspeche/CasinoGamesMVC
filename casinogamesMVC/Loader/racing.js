$(document).ready(function () {
    var oMain = new CMain({
        money: credito, //USER MONEY
        min_bet: 1, //MINIMUM BET
        max_bet: 400, //MAXIMUM BET
        win_occurrence: 25, //WIN OCCURRENCE
        game_cash: 50, //GAME CASH. STARTING MONEY THAT THE GAME CAN DELIVER.
        chip_values: [1, 5, 10, 25, 50, 100], //VALUE OF CHIPS
        show_credits: true,
        fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        num_levels_for_ads: 2 //NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
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
