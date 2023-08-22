$(document).ready(function () {
    var oMain = new CMain({

        bank_money: 50,
        start_player_money: credito,
        starting_bet: 0.25,
        coin_bet: [0.25, 0.5, 1],
        win_occurrence: [
                            40, //WIN OCURRENCE PERCENTAGE FOR 45 EXTRACTIONS
                            50, //WIN OCURRENCE PERCENTAGE FOR 55 EXTRACTIONS
                            60],//WIN OCURRENCE PERCENTAGE FOR 65 EXTRACTIONS
        time_extraction: 1500,
        paytable: [
                    [5, 50, 100], //PAYTABLE FOR 45 EXTRACTIONS
                    [2, 10, 50], //PAYTABLE FOR 55 EXTRACTIONS
                    [1, 2, 20], //PAYTABLE FOR 65 EXTRACTIONS
        ],
        fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: true,     //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        //////////////////////////////////////////////////////////////////////////////////////////
        ad_show_counter: 5     //NUMBER OF TURNS PLAYED BEFORE AD SHOWN
        //
        //// THIS FUNCTIONALITY IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN.///////////////////////////
        /////////////////// YOU CAN GET IT AT: /////////////////////////////////////////////////////////
        // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421?s_phrase=&s_rank=27 ///////////

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