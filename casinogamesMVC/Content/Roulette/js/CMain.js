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

        createjs.Ticker.setFPS(FPS);
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

         if(_iCurResource === RESOURCE_TO_LOAD){
            _oPreloader.unload();
            
            this.gotoMenu();
         }
    };
    
    this._initSounds = function(){
         if (!createjs.Sound.initializeDefaultPlugins()) {
             return;
         }
	
        if(navigator.userAgent.indexOf("Opera")>0 || navigator.userAgent.indexOf("OPR")>0){
                createjs.Sound.alternateExtensions = ["mp3"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

                createjs.Sound.registerSound("./Content/Roulette/sounds/chip.ogg", "chip");
                createjs.Sound.registerSound("./Content/Roulette/sounds/click.ogg", "click");
                createjs.Sound.registerSound("./Content/Roulette/sounds/fiche_collect.ogg", "fiche_collect");
                createjs.Sound.registerSound("./Content/Roulette/sounds/fiche_select.ogg", "fiche_select");
                createjs.Sound.registerSound("./Content/Roulette/sounds/wheel_sound.ogg", "wheel_sound");
                createjs.Sound.registerSound("./Content/Roulette/sounds/win.ogg", "win");
                createjs.Sound.registerSound("./Content/Roulette/sounds/lose.ogg", "lose");
        }else{
                createjs.Sound.alternateExtensions = ["ogg"];
                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

                createjs.Sound.registerSound("./Content/Roulette/sounds/chip.mp3", "chip");
                createjs.Sound.registerSound("./Content/Roulette/sounds/click.mp3", "click");
                createjs.Sound.registerSound("./Content/Roulette/sounds/fiche_collect.mp3", "fiche_collect");
                createjs.Sound.registerSound("./Content/Roulette/sounds/fiche_select.mp3", "fiche_select");
                createjs.Sound.registerSound("./Content/Roulette/sounds/wheel_sound.mp3", "wheel_sound");
                createjs.Sound.registerSound("./Content/Roulette/sounds/win.mp3", "win");
                createjs.Sound.registerSound("./Content/Roulette/sounds/lose.mp3", "lose");
        }
        
        RESOURCE_TO_LOAD += 5;
    };
    
    this._loadImages = function(){
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );

	s_oSpriteLibrary.addSprite("bg_menu","./Content/Roulette/sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit","./Content/Roulette/sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_game","./Content/Roulette/sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("audio_icon","./Content/Roulette/sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box","./Content/Roulette/sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("hit_area_0","./Content/Roulette/sprites/hit_area_0.png");
        s_oSpriteLibrary.addSprite("hit_area_color","./Content/Roulette/sprites/hit_area_color.png");
        s_oSpriteLibrary.addSprite("hit_area_horizontal","./Content/Roulette/sprites/hit_area_horizontal.png");
        s_oSpriteLibrary.addSprite("hit_area_number","./Content/Roulette/sprites/hit_area_number.png");
        s_oSpriteLibrary.addSprite("hit_area_couple_horizontal","./Content/Roulette/sprites/hit_area_couple_horizontal.png");
        s_oSpriteLibrary.addSprite("hit_area_couple_vertical","./Content/Roulette/sprites/hit_area_couple_vertical.png");
        s_oSpriteLibrary.addSprite("hit_area_small","./Content/Roulette/sprites/hit_area_small.png");
        s_oSpriteLibrary.addSprite("hit_area_horizontal_half","./Content/Roulette/sprites/hit_area_horizontal_half.png");
        s_oSpriteLibrary.addSprite("chip_box","./Content/Roulette/sprites/chip_box.png");
        s_oSpriteLibrary.addSprite("but_bets","./Content/Roulette/sprites/but_bets.png");
        s_oSpriteLibrary.addSprite("but_bg","./Content/Roulette/sprites/but_bg.png");
        s_oSpriteLibrary.addSprite("but_clear_all","./Content/Roulette/sprites/but_clear_all.png");
        s_oSpriteLibrary.addSprite("but_clear_last","./Content/Roulette/sprites/but_clear_last.png");
        s_oSpriteLibrary.addSprite("but_rebet","./Content/Roulette/sprites/but_rebet.png");
        s_oSpriteLibrary.addSprite("but_play","./Content/Roulette/sprites/but_play.png");
        s_oSpriteLibrary.addSprite("logo_credits","./Content/Roulette/sprites/logo_credits.png");
        s_oSpriteLibrary.addSprite("but_credits","./Content/Roulette/sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("history_bg","./Content/Roulette/sprites/history_bg.png");
        s_oSpriteLibrary.addSprite("show_number_panel","./Content/Roulette/sprites/show_number_panel.png");
        s_oSpriteLibrary.addSprite("show_number_bg","./Content/Roulette/sprites/show_number_bg.png");
        s_oSpriteLibrary.addSprite("ball","./Content/Roulette/sprites/ball.png");
        s_oSpriteLibrary.addSprite("enlight_0","./Content/Roulette/sprites/enlight_0.png");
        s_oSpriteLibrary.addSprite("enlight_color","./Content/Roulette/sprites/enlight_color.png");
        s_oSpriteLibrary.addSprite("enlight_horizontal","./Content/Roulette/sprites/enlight_horizontal.png");
        s_oSpriteLibrary.addSprite("enlight_number","./Content/Roulette/sprites/enlight_number.png");
        s_oSpriteLibrary.addSprite("enlight_horizontal_half","./Content/Roulette/sprites/enlight_horizontal_half.png");
        s_oSpriteLibrary.addSprite("select_fiche","./Content/Roulette/sprites/select_fiche.png");
        s_oSpriteLibrary.addSprite("spin_but","./Content/Roulette/sprites/spin_but.png");
        s_oSpriteLibrary.addSprite("placeholder","./Content/Roulette/sprites/placeholder.png");
        s_oSpriteLibrary.addSprite("circle_red","./Content/Roulette/sprites/circle_red.png");
        s_oSpriteLibrary.addSprite("circle_green","./Content/Roulette/sprites/circle_green.png");
        s_oSpriteLibrary.addSprite("circle_black","./Content/Roulette/sprites/circle_black.png");
        s_oSpriteLibrary.addSprite("final_bet_bg","./Content/Roulette/sprites/final_bet_bg.png");
        s_oSpriteLibrary.addSprite("neighbor_bg","./Content/Roulette/sprites/neighbor_bg.jpg");
        s_oSpriteLibrary.addSprite("neighbor_enlight","./Content/Roulette/sprites/neighbor_enlight.png");
        s_oSpriteLibrary.addSprite("hitarea_neighbor","./Content/Roulette/sprites/hitarea_neighbor.png");
        s_oSpriteLibrary.addSprite("bg_wheel","./Content/Roulette/sprites/bg_wheel.jpg");
        s_oSpriteLibrary.addSprite("logo_game_0","./Content/Roulette/sprites/logo_game_0.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./Content/Roulette/sprites/but_fullscreen.png");
        
        s_oSpriteLibrary.addSprite("board_roulette","./Content/Roulette/sprites/board_roulette.jpg");
        
        for(var i=0;i<NUM_FICHES;i++){
            s_oSpriteLibrary.addSprite("fiche_"+i,"./Content/Roulette/sprites/fiche_"+i+".png");
        }
        
        for(var j=0;j<NUM_MASK_BALL_SPIN_FRAMES;j++){
            s_oSpriteLibrary.addSprite("wheel_handle_"+j,"./Content/Roulette/sprites/mask_ball_spin/wheel_handle_"+j+".png");
        }
        
        for(var t=0;t<NUM_MASK_BALL_SPIN_FRAMES;t++){
            s_oSpriteLibrary.addSprite("wheel_numbers_"+t,"./Content/Roulette/sprites/wheel_anim/wheel_numbers_"+t+".png");
        }
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();

        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;

        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);

        _oPreloader.refreshLoader(iPerc);
        
        if(_iCurResource === RESOURCE_TO_LOAD){
            _oPreloader.unload();
            
            this.gotoMenu();
        }
    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this.onAllPreloaderImagesLoaded = function(){
        this._loadImages();
    };
    
    this.onImageLoadError = function(szText){
        
    };
	
    this.preloaderReady = function(){
        this._loadImages();
		
	if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }
        
        _bUpdate = true;
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
    ENABLE_FULLSCREEN = oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;
    SHOW_CREDITS = _oData.show_credits;

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
var s_oMain = null;
var s_oSpriteLibrary;