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
        createjs.Touch.enable(s_oStage);
        
        s_bMobile = jQuery.browser.mobile;
        if(s_bMobile === false){
            s_oStage.enableMouseOver(20);  
        }
        s_iPrevTime = new Date().getTime();

        createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", this._update);
		
	if(navigator.userAgent.match(/Windows Phone/i)){
            DISABLE_SOUND_MOBILE = true;
        }
		
        s_oSpriteLibrary  = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
    };

    this.soundLoaded = function(){
         _iCurResource++;
         var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);
        
        if(_iCurResource === RESOURCE_TO_LOAD){
            this.removePreloader();
        }
    };
    
    this._initSounds = function(){
         if (!createjs.Sound.initializeDefaultPlugins()) {
             return;
         }

        if(navigator.userAgent.indexOf("Opera")>0 || navigator.userAgent.indexOf("OPR")>0){
                createjs.Sound.alternateExtensions = ["mp3"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

                createjs.Sound.registerSound("./Content/Poker/sounds/soundtrack.ogg", "soundtrack");
                createjs.Sound.registerSound("./Content/Poker/sounds/card.ogg", "card");
                createjs.Sound.registerSound("./Content/Poker/sounds/press_but.ogg", "press_but");
                createjs.Sound.registerSound("./Content/Poker/sounds/win.ogg", "win");
                createjs.Sound.registerSound("./Content/Poker/sounds/lose.ogg", "lose");
                createjs.Sound.registerSound("./Content/Poker/sounds/press_hold.ogg", "press_hold");
        }else{
                createjs.Sound.alternateExtensions = ["ogg"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

                createjs.Sound.registerSound("./Content/Poker/sounds/soundtrack.mp3", "soundtrack");
                createjs.Sound.registerSound("./Content/Poker/sounds/card.mp3", "card");
                createjs.Sound.registerSound("./Content/Poker/sounds/press_but.mp3", "press_but");
                createjs.Sound.registerSound("./Content/Poker/sounds/win.mp3", "win");
                createjs.Sound.registerSound("./Content/Poker/sounds/lose.mp3", "lose");
                createjs.Sound.registerSound("./Content/Poker/sounds/press_hold.mp3", "press_hold");
        }
        RESOURCE_TO_LOAD += 6;
        
    };
    
    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );
        
        s_oSpriteLibrary.addSprite("bg_menu","./Content/Poker/sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_menu_bg","./Content/Poker/sprites/but_menu_bg.png");
        s_oSpriteLibrary.addSprite("but_game_bg","./Content/Poker/sprites/but_game_bg.png");
        s_oSpriteLibrary.addSprite("but_exit","./Content/Poker/sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon","./Content/Poker/sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game","./Content/Poker/sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("card_spritesheet","./Content/Poker/sprites/card_spritesheet.png");
        s_oSpriteLibrary.addSprite("msg_box","./Content/Poker/sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_left","./Content/Poker/sprites/but_left.png");
        s_oSpriteLibrary.addSprite("but_right","./Content/Poker/sprites/but_right.png");
        s_oSpriteLibrary.addSprite("hold","./Content/Poker/sprites/hold.png");
        s_oSpriteLibrary.addSprite("logo_game","./Content/Poker/sprites/logo_game.png");
        s_oSpriteLibrary.addSprite("paytable","./Content/Poker/sprites/paytable.png");
        s_oSpriteLibrary.addSprite("display_bg","./Content/Poker/sprites/display_bg.png");
        s_oSpriteLibrary.addSprite("big_display","./Content/Poker/sprites/big_display.png");
        s_oSpriteLibrary.addSprite("selection","./Content/Poker/sprites/selection.png");
        s_oSpriteLibrary.addSprite("card_selection","./Content/Poker/sprites/card_selection.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./Content/Poker/sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("bg_doubleup","./Content/Poker/sprites/bg_doubleup.jpg");
        s_oSpriteLibrary.addSprite("but_credits","./Content/Poker/sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./Content/Poker/sprites/ctl_logo.png");
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();

        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);
        
        if(_iCurResource === RESOURCE_TO_LOAD){
            this.removePreloader();
        }
    };
    
    this.preloaderReady = function(){
        this._loadImages();
		
	if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }
        
        _bUpdate = true;
    };
    
    this.removePreloader = function(){
        _oPreloader.unload();
        
        if (!isIOS()) {
            if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
                s_oSoundTrack = createjs.Sound.play("soundtrack",{ loop:-1});
            }
        }
        
        this.gotoMenu();
    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this.onAllPreloaderImagesLoaded = function(){
        this._loadImages();
    };
    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };
    
    this.gotoGame = function(){
        _oGame = new CGame(_oData);   
							
        _iState = STATE_GAME;
        $(s_oMain).trigger("game_start");
    };
    
    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
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
    ENABLE_FULLSCREEN = _oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = _oData.check_orientation;
    SHOW_CREDITS = _oData.show_credits;
    
    this.initContainer();
}

var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain = null;
var s_oSpriteLibrary;
var s_oSoundTrack = null;
var s_bFullscreen = false;