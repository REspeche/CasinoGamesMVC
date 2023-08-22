function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    var _oPreloader;
    var _oMenu;
    var _oGame;

    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
	s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);

        s_bMobile = jQuery.browser.mobile;
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
            $('body').on('contextmenu', '#canvas', function (e) {
                return false;
            });
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
    };

    this.preloaderReady = function () {
        jQuery.getJSON("/Content/Racing/greyhound_info.json", this.onLoadedJSON); 
        _bUpdate = true;
    };
    
    this.onLoadedJSON = function (oData) {
        s_oGameSettings = new CGameSettings(oData);
        s_oBetList = new CBetList();
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            s_oMain._initSounds();
        }
        
        s_oMain._loadImages();
    };
    
    this.soundLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);

        if (_iCurResource === RESOURCE_TO_LOAD) {
            this._onRemovePreloader();
        }
    };

    this._initSounds = function () {
        if (!createjs.Sound.initializeDefaultPlugins()) {
            return;
        }

        if (navigator.userAgent.indexOf("Opera") > 0 || navigator.userAgent.indexOf("OPR") > 0) {
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

            createjs.Sound.registerSound("./Content/Racing/sounds/soundtrack.ogg", "soundtrack");
            createjs.Sound.registerSound("./Content/Racing/sounds/click.ogg", "click");
            createjs.Sound.registerSound("./Content/Racing/sounds/chip.ogg", "chip");
            createjs.Sound.registerSound("./Content/Racing/sounds/start_race.ogg", "start_race");
            createjs.Sound.registerSound("./Content/Racing/sounds/photo.ogg", "photo");
        } else {
            createjs.Sound.alternateExtensions = ["ogg"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

            createjs.Sound.registerSound("./Content/Racing/sounds/soundtrack.mp3", "soundtrack");
            createjs.Sound.registerSound("./Content/Racing/sounds/click.mp3", "click");
            createjs.Sound.registerSound("./Content/Racing/sounds/chip.mp3", "chip");
            createjs.Sound.registerSound("./Content/Racing/sounds/start_race.mp3", "start_race");
            createjs.Sound.registerSound("./Content/Racing/sounds/photo.mp3", "photo");
        }

        RESOURCE_TO_LOAD += 5;

    };

    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("bg_menu", "./Content/Racing/sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./Content/Racing/sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./Content/Racing/sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_play", "./Content/Racing/sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./Content/Racing/sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./Content/Racing/sprites/but_home.png");
        s_oSpriteLibrary.addSprite("msg_box", "./Content/Racing/sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_credits", "./Content/Racing/sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./Content/Racing/sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./Content/Racing/sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("bg_game", "./Content/Racing/sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_no", "./Content/Racing/sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_yes", "./Content/Racing/sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("arrow_left", "./Content/Racing/sprites/arrow_left.png");
        s_oSpriteLibrary.addSprite("arrow_right", "./Content/Racing/sprites/arrow_right.png");
        s_oSpriteLibrary.addSprite("fiche_0", "./Content/Racing/sprites/fiche_0.png");
        s_oSpriteLibrary.addSprite("fiche_1", "./Content/Racing/sprites/fiche_1.png");
        s_oSpriteLibrary.addSprite("fiche_2", "./Content/Racing/sprites/fiche_2.png");
        s_oSpriteLibrary.addSprite("fiche_3", "./Content/Racing/sprites/fiche_3.png");
        s_oSpriteLibrary.addSprite("fiche_4", "./Content/Racing/sprites/fiche_4.png");
        s_oSpriteLibrary.addSprite("fiche_5", "./Content/Racing/sprites/fiche_5.png");
        s_oSpriteLibrary.addSprite("bg_bet_panel", "./Content/Racing/sprites/bg_bet_panel.jpg");
        s_oSpriteLibrary.addSprite("money_panel", "./Content/Racing/sprites/money_panel.png");
        s_oSpriteLibrary.addSprite("simple_bet_panel", "./Content/Racing/sprites/simple_bet_panel.png");
        s_oSpriteLibrary.addSprite("forecast_panel", "./Content/Racing/sprites/forecast_panel.png");
        s_oSpriteLibrary.addSprite("bet_place", "./Content/Racing/sprites/bet_place.png");
        s_oSpriteLibrary.addSprite("fiche_highlight", "./Content/Racing/sprites/fiche_highlight.png");
        s_oSpriteLibrary.addSprite("odd_bg", "./Content/Racing/sprites/odd_bg.png");
        s_oSpriteLibrary.addSprite("rank_panel", "./Content/Racing/sprites/rank_panel.png");
        s_oSpriteLibrary.addSprite("panel_arrival", "./Content/Racing/sprites/panel_arrival.png");
        s_oSpriteLibrary.addSprite("bibs", "./Content/Racing/sprites/bibs.png");
        s_oSpriteLibrary.addSprite("but_skip", "./Content/Racing/sprites/but_skip.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./Content/Racing/sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_start_race", "./Content/Racing/sprites/but_start_race.png");
        s_oSpriteLibrary.addSprite("but_clear_bet", "./Content/Racing/sprites/but_clear_bet.png");
        s_oSpriteLibrary.addSprite("fiche_panel", "./Content/Racing/sprites/fiche_panel.png");
        s_oSpriteLibrary.addSprite("fill_bar", "./Content/Racing/sprites/fill_bar.png");
        s_oSpriteLibrary.addSprite("win_panel", "./Content/Racing/sprites/win_panel.png");
        s_oSpriteLibrary.addSprite("lose_panel", "./Content/Racing/sprites/lose_panel.png");
        
        for(var i=0;i<NUM_GREYHOUNDS;i++){
            s_oSpriteLibrary.addSprite("bib_gui_"+i, "./Content/Racing/sprites/bib_gui_"+i+".png");
            s_oSpriteLibrary.addSprite("greyhound_"+(i+1), "./Content/Racing/sprites/greyhound_"+(i+1)+".png");
        }
        
        for(var j=0;j<NUM_TRACK_BG;j++){
            s_oSpriteLibrary.addSprite("bg_track_"+j, "./Content/Racing/sprites/bg_track/bg_track_"+j+".jpg");
        }
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
        
        if (_iCurResource === RESOURCE_TO_LOAD) {
            this._onRemovePreloader();
        }
    };

    this._onAllImagesLoaded = function () {
        
    };

    this.onAllPreloaderImagesLoaded = function () {
        this._loadImages();
    };
    
    this._onRemovePreloader = function(){
        try{
            saveItem("ls_available","ok");
        }catch(evt){
            // localStorage not defined
            s_bStorageAvailable = false;
        }
        
        _oPreloader.unload();

        if (!isIOS()) {
            if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
                s_oSoundTrack = createjs.Sound.play("soundtrack", {loop: -1});
            }
        }
        

        this.gotoMenu();
    };
    
    this.gotoMenu = function () {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };
    
    this.gotoBetPanel = function(){
        new CBetPanel();
        _iState = STATE_BET_PANEL;
        $(s_oMain).trigger("start_session");
    };
    
    this.gotoGame = function (_iTotBet) {
        _oGame = new CGame(_iTotBet);
        _iState = STATE_GAME;
    };

    this.stopUpdate = function(){
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");
	createjs.Sound.setMute(true);
        
    };

    this.startUpdate = function(){
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");
        
        if(s_bAudioActive){
                createjs.Sound.setMute(false);
        }
    };

    this._update = function (event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);

    };

    s_oMain = this;

    _oData = oData;
    s_iCurMoney = oData.money;
    s_iGameCash = oData.game_cash;
    CHIP_VALUES = oData.chip_values;
    MIN_BET = oData.min_bet;
    MAX_BET = oData.max_bet;
    WIN_OCCURRENCE = oData.win_occurrence;
    AD_SHOW_COUNTER = oData.num_levels_for_ads;
    
    SHOW_CREDITS = oData.show_credits;
    ENABLE_FULLSCREEN = oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;
    
    NUM_CHIPS = CHIP_VALUES.length;

    this.initContainer();
}

var s_bMobile;
var s_bAudioActive = true;
var s_bFullscreen = false;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundTrack = null;
var s_oCanvas;
var s_bStorageAvailable = true;
var s_iCurMoney;
var s_iGameCash;
var s_iAdCounter = 0;