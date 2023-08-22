function CMain(oData){
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    
    var _oData;
    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;

    this.initContainer = function(){
        var canvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(canvas);  
        
        s_oAttachSection = new createjs.Container();
        s_oStage.addChild(s_oAttachSection);
        
        createjs.Touch.enable(s_oStage);
        
        s_bMobile = jQuery.browser.mobile;
        if(s_bMobile === false){
            s_oStage.enableMouseOver(20);  
        }
        
        
        s_iPrevTime = new Date().getTime();

        createjs.Ticker.setFPS(FPS);
	createjs.Ticker.addEventListener("tick", this._update);
	
        if(navigator.userAgent.match(/Windows Phone/i)){
                DISABLE_SOUND_MOBILE = true;
        }
		
        s_oSpriteLibrary  = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
    };
    
    this.preloaderReady = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }
        
        this._loadImages();
        _bUpdate = true;
    };

    this.soundLoaded = function(){
        _iCurResource++;

        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);

         if(_iCurResource === RESOURCE_TO_LOAD){
              this.onAllResourcesLoaded();
         }
    };
    
    this._initSounds = function(){
         if (!createjs.Sound.initializeDefaultPlugins()) {
             return;
         }
		
        if(navigator.userAgent.indexOf("Opera")>0 || navigator.userAgent.indexOf("OPR")>0){
                createjs.Sound.alternateExtensions = ["mp3"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));
                
                createjs.Sound.registerSound("./Content/Soccer/sounds/soundtrack.ogg", "soundtrack");
                createjs.Sound.registerSound("./Content/Soccer/sounds/crowd.ogg", "crowd");
                createjs.Sound.registerSound("./Content/Soccer/sounds/press_but.ogg", "press_but");
                createjs.Sound.registerSound("./Content/Soccer/sounds/reel_stop.ogg", "reel_stop",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/reel_stop_bonus.ogg", "reel_stop_bonus",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/reel_stop_freespin.ogg", "reel_stop_freespin",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/start_reel.ogg", "start_reel",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/spin_but.ogg", "spin_but");
                createjs.Sound.registerSound("./Content/Soccer/sounds/kick.ogg", "kick");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol_1.ogg", "symbol_1");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol2.ogg", "symbol2");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol3.ogg", "symbol3");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol4.ogg", "symbol4");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol5.ogg", "symbol5");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol6.ogg", "symbol6");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol7.ogg", "symbol7");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol8.ogg", "symbol8");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol9_10_11.ogg", "symbol9_10_11");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol12.ogg", "symbol12");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol13.ogg", "symbol13");
                createjs.Sound.registerSound("./Content/Soccer/sounds/bonus_win.ogg", "bonus_win");
                createjs.Sound.registerSound("./Content/Soccer/sounds/avatar_win.ogg", "avatar_win");
        }else{
                createjs.Sound.alternateExtensions = ["ogg"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));
                
                createjs.Sound.registerSound("./Content/Soccer/sounds/soundtrack.mp3", "soundtrack");
                createjs.Sound.registerSound("./Content/Soccer/sounds/crowd.mp3", "crowd");
                createjs.Sound.registerSound("./Content/Soccer/sounds/press_but.mp3", "press_but");
                createjs.Sound.registerSound("./Content/Soccer/sounds/reel_stop.mp3", "reel_stop",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/reel_stop_bonus.mp3", "reel_stop_bonus",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/reel_stop_freespin.mp3", "reel_stop_freespin",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/start_reel.mp3", "start_reel",6);
                createjs.Sound.registerSound("./Content/Soccer/sounds/spin_but.mp3", "spin_but");
                createjs.Sound.registerSound("./Content/Soccer/sounds/kick.mp3", "kick");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol1.mp3", "symbol1");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol2.mp3", "symbol2");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol3.mp3", "symbol3");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol4.mp3", "symbol4");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol5.mp3", "symbol5");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol6.mp3", "symbol6");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol7.mp3", "symbol7");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol8.mp3", "symbol8");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol9_10_11.mp3", "symbol9_10_11");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol12.mp3", "symbol12");
                createjs.Sound.registerSound("./Content/Soccer/sounds/symbol13.mp3", "symbol13");
                createjs.Sound.registerSound("./Content/Soccer/sounds/bonus_win.mp3", "bonus_win");
                createjs.Sound.registerSound("./Content/Soccer/sounds/avatar_win.mp3", "avatar_win");
        }
        
        RESOURCE_TO_LOAD += 22; 
    };
    
    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );
        
        s_oSpriteLibrary.addSprite("bg_menu","./Content/Soccer/sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_bg","./Content/Soccer/sprites/but_play_bg.png");
        s_oSpriteLibrary.addSprite("but_exit","./Content/Soccer/sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_game","./Content/Soccer/sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("paytable1","./Content/Soccer/sprites/paytable1.jpg");
        s_oSpriteLibrary.addSprite("paytable2","./Content/Soccer/sprites/paytable2.jpg");
        s_oSpriteLibrary.addSprite("paytable3","./Content/Soccer/sprites/paytable3.jpg");
        s_oSpriteLibrary.addSprite("paytable4","./Content/Soccer/sprites/paytable4.jpg");
        s_oSpriteLibrary.addSprite("mask_slot","./Content/Soccer/sprites/mask_slot.png");
        s_oSpriteLibrary.addSprite("coin_but","./Content/Soccer/sprites/but_coin_bg.png");
        s_oSpriteLibrary.addSprite("info_but","./Content/Soccer/sprites/but_info_bg.png");
        s_oSpriteLibrary.addSprite("win_frame_anim","./Content/Soccer/sprites/win_frame_anim.png");
        s_oSpriteLibrary.addSprite("but_lines_bg","./Content/Soccer/sprites/but_lines_bg.png");
        s_oSpriteLibrary.addSprite("but_maxbet_bg","./Content/Soccer/sprites/but_maxbet_bg.png");
        s_oSpriteLibrary.addSprite("audio_icon","./Content/Soccer/sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box","./Content/Soccer/sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_arrow_next","./Content/Soccer/sprites/but_arrow_next.png");
        s_oSpriteLibrary.addSprite("but_arrow_prev","./Content/Soccer/sprites/but_arrow_prev.png");
        s_oSpriteLibrary.addSprite("logo","./Content/Soccer/sprites/logo.png");
        s_oSpriteLibrary.addSprite("but_spin","./Content/Soccer/sprites/but_spin.png");
        s_oSpriteLibrary.addSprite("bg_loading_bonus","./Content/Soccer/sprites/bg_loading_bonus.jpg");
        s_oSpriteLibrary.addSprite("bg_loading","./Content/Soccer/sprites/bg_loading.jpg");
        s_oSpriteLibrary.addSprite("but_fullscreen","./Content/Soccer/sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits","./Content/Soccer/sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./Content/Soccer/sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_exit_info","./Content/Soccer/sprites/but_exit_info.png");
        s_oSpriteLibrary.addSprite("amount_win_bg","./Content/Soccer/sprites/amount_win_bg.png");
        
        for(var i=1;i<NUM_SYMBOLS+1;i++){
            s_oSpriteLibrary.addSprite("symbol_"+i,"./Content/Soccer/sprites/symbol_"+i+".png");
            s_oSpriteLibrary.addSprite("symbol_"+i+"_anim","./Content/Soccer/sprites/symbol_"+i+"_anim.jpg");
            
        }
        
        for(var j=1;j<NUM_PAYLINES+1;j++){
            s_oSpriteLibrary.addSprite("payline_"+j,"./Content/Soccer/sprites/paylines/payline_"+j+".png");
            s_oSpriteLibrary.addSprite("bet_but"+j,"./Content/Soccer/sprites/paylines/bet_but"+j+".png");
        }
        
        //AVATAR FRAMES
        for(var k=0;k<30;k++){
            s_oSpriteLibrary.addSprite("avatar_idle_"+k,"./Content/Soccer/sprites/avatar/avatar_idle/avatar_idle_"+k+".png");
        }
        
        for(var t=0;t<38;t++){
            s_oSpriteLibrary.addSprite("avatar_win_"+t,"./Content/Soccer/sprites/avatar/avatar_win/avatar_win_"+t+".png");
        }
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();

        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;

        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);

        if(_iCurResource === RESOURCE_TO_LOAD){
            this.onAllResourcesLoaded();
        }
    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this.onAllResourcesLoaded = function(){
        s_oGameSettings = new CSlotSettings();
        s_oMsgBox = new CMsgBox();
        _oPreloader.unload();
        
        WIN_OCCURRENCE = _oData.win_occurrence;
        MIN_REEL_LOOPS = _oData.min_reel_loop;
        REEL_DELAY = _oData.reel_delay;
        TIME_SHOW_WIN = _oData.time_show_win;
        TIME_SHOW_ALL_WINS = _oData.time_show_all_wins;
        SLOT_CASH = _oData.slot_cash;
        TOTAL_MONEY = parseFloat(_oData.money);
        FREESPIN_OCCURRENCE = _oData.freespin_occurrence;
        BONUS_OCCURRENCE = _oData.bonus_occurrence;
        FREESPIN_SYMBOL_NUM_OCCURR = _oData.freespin_symbol_num_occur;
        NUM_FREESPIN = _oData.num_freespin;
        BONUS_PRIZE = _oData.bonus_prize;
        BONUS_PRIZE_OCCURR = _oData.bonus_prize_occur;
        COIN_BET = _oData.coin_bet;
        ENABLE_FULLSCREEN = oData.fullscreen;
        NUM_SPIN_FOR_ADS = oData.num_spin_ads_showing;
        
        this.gotoMenu();
    };
    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };
    
    this.gotoGame = function(){
        _oGame = new CGame(_oData);   
							
        _iState = STATE_GAME;
    };
    
    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };
    
    this.stopUpdate = function () {
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");
    };

    this.startUpdate = function () {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");
    };
    
    this._update = function(event){
        if(_bUpdate === false){
                return;
        }
                
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;
        
        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime-=1000;
            s_iCntFps = 0;
        }
                
        if(_iState === STATE_GAME){
            _oGame.update();
        }
        
        s_oStage.update(event);

    };
    
    s_oMain = this;
    _oData = oData;

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
var s_oAttachSection;
var s_oMain;
var s_oSpriteLibrary;
var s_bLogged = false;
var s_oMsgBox;
var s_oGameSettings;