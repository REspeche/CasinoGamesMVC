function commonsEvents (oMain) {
    $(oMain).on("start_session", function (evt) {
        if (!debug) fullcreenMode(true);
    });

    $(oMain).on("end_session", function (evt) {
        if (!debug) {
            fullcreenMode(false);
            returnURL();
        }
    });

    $(oMain).on("save_score", function (evt, iMoney) {
        if (!debug) {
            $.ajax({
                crossDomain: true,
                type: 'GET',
                url: callbackURL,
                data: {
                    action: 'play',
                    amount: iMoney,
                    callbacktoken: callbacktoken
                },
                success: function (data) {
                    if (data.toUpperCase().indexOf('LOGOUT') >= 0) returnURL();
                }
            });
        }
        else console.log('save_score: ' + callbackURL + '?action=play&amount=' + iMoney + '&callbacktoken=' + callbacktoken);
    });

    $(oMain).on("show_interlevel_ad", function (evt) {

    });

    $(oMain).on("share_event", function (evt, oData) {

    });
};