$(document).ready(function () {
    var oMain = new CMain({

        bank_money: 50,
        start_player_money: credito,

        win_occurrence: [
                            "-",
                            65, //WIN OCCURRENCE WITH 2 NUMBERS CHOSEN
                            60, //WIN OCCURRENCE WITH 3 NUMBERS CHOSEN
                            55, //WIN OCCURRENCE WITH 4 NUMBERS CHOSEN
                            50, //WIN OCCURRENCE WITH 5 NUMBERS CHOSEN
                            45, //WIN OCCURRENCE WITH 6 NUMBERS CHOSEN
                            40, //WIN OCCURRENCE WITH 7 NUMBERS CHOSEN
                            35, //WIN OCCURRENCE WITH 8 NUMBERS CHOSEN
                            30, //WIN OCCURRENCE WITH 9 NUMBERS CHOSEN
                            25  //WIN OCCURRENCE WITH 10 NUMBERS CHOSEN
        ],


        //PAYOUT VALUES TABLE: {#HITS, BET MULTIPLY, HITS OCCURRENCE}
        payouts: [
                    { hits: ["-"], pays: ["-"], occurrence: [0] },                   //PAYOUTS FOR 1 NUMBERS
                    { hits: [2, 1], pays: [9, 1], occurrence: [20, 80] },               //PAYOUTS FOR 2 NUMBERS
                    { hits: [3, 2], pays: [47, 2], occurrence: [20, 80] },               //PAYOUTS FOR 3 NUMBERS
                    { hits: [4, 3, 2], pays: [91, 5, 2], occurrence: [10, 30, 60] },            //PAYOUTS FOR 4 NUMBERS
                    { hits: [5, 4, 3], pays: [820, 12, 3], occurrence: [10, 30, 60] },            //PAYOUTS FOR 5 NUMBERS
                    { hits: [6, 5, 4, 3], pays: [1600, 70, 4, 3], occurrence: [10, 20, 30, 40] },         //PAYOUTS FOR 6 NUMBERS
                    { hits: [7, 6, 5, 4, 3], pays: [7000, 400, 21, 2, 1], occurrence: [5, 10, 20, 30, 35] },       //PAYOUTS FOR 7 NUMBERS
                    { hits: [8, 7, 6, 5, 4], pays: [10000, 1650, 100, 12, 2], occurrence: [5, 10, 20, 30, 35] },       //PAYOUTS FOR 8 NUMBERS
                    { hits: [9, 8, 7, 6, 5, 4], pays: [10000, 4700, 335, 44, 6, 1], occurrence: [1, 4, 10, 20, 30, 35] },     //PAYOUTS FOR 9 NUMBERS
                    { hits: [10, 9, 8, 7, 6, 5], pays: [10000, 4500, 1000, 142, 24, 5], occurrence: [1, 4, 10, 15, 30, 40] }      //PAYOUTS FOR 10 NUMBERS

        ],


        animation_speed: 300,
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