using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Poker

            bundles.Add(new ScriptBundle("~/Js/Poker").Include(
                        "~/Content/Poker/js/jquery-2.0.3.min.js",
                        "~/Content/Poker/js/createjs-2013.12.12.min.js",
                        "~/Content/Poker/js/ctl_utils.js",
                        "~/Content/Poker/js/sprite_lib.js",
                        "~/Content/Poker/js/settings.js",
                        "~/Content/Poker/js/CPreloader.js",
                        "~/Content/Poker/js/CMain.js",
                        "~/Content/Poker/js/CTextButton.js",
                        "~/Content/Poker/js/CGfxButton.js",
                        "~/Content/Poker/js/CToggle.js",
                        "~/Content/Poker/js/CMenu.js",
                        "~/Content/Poker/js/CGame.js",
                        "~/Content/Poker/js/CInterface.js",
                        "~/Content/Poker/js/CGameSettings.js",
                        "~/Content/Poker/js/CCard.js",
                        "~/Content/Poker/js/CAlertPanel.js",
                        "~/Content/Poker/js/CPayTable.js",
                        "~/Content/Poker/js/CPayTableSettings.js",
                        "~/Content/Poker/js/CHandEvaluator.js",
                        "~/Content/Poker/js/CDoubleUpPanel.js",
                        "~/Content/Poker/js/CCreditsPanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Poker.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Poker").Include(
                        "~/Content/Poker/css/reset.css",
                        "~/Content/Poker/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Roulette

            bundles.Add(new ScriptBundle("~/Js/Roulette").Include(
                        "~/Content/Roulette/js/jquery-2.0.3.min.js",
                        "~/Content/Roulette/js/createjs-2014.12.12.min.js",
                        "~/Content/Roulette/js/ctl_utils.js",
                        "~/Content/Roulette/js/sprite_lib.js",
                        "~/Content/Roulette/js/settings.js",
                        "~/Content/Roulette/js/CRouletteSettings.js",
                        "~/Content/Roulette/js/CFichesController.js",
                        "~/Content/Roulette/js/CPreloader.js",
                        "~/Content/Roulette/js/CMain.js",
                        "~/Content/Roulette/js/CTextButton.js",
                        "~/Content/Roulette/js/CGfxButton.js",
                        "~/Content/Roulette/js/CFicheBut.js",
                        "~/Content/Roulette/js/CBetTableButton.js",
                        "~/Content/Roulette/js/CBetTextButton.js",
                        "~/Content/Roulette/js/CToggle.js",
                        "~/Content/Roulette/js/CMenu.js",
                        "~/Content/Roulette/js/CGame.js",
                        "~/Content/Roulette/js/CInterface.js",
                        "~/Content/Roulette/js/CMsgBox.js",
                        "~/Content/Roulette/js/CTweenController.js",
                        "~/Content/Roulette/js/CSeat.js",
                        "~/Content/Roulette/js/CTableController.js",
                        "~/Content/Roulette/js/CEnlight.js",
                        "~/Content/Roulette/js/CFiche.js",
                        "~/Content/Roulette/js/CHistoryRow.js",
                        "~/Content/Roulette/js/CWheelAnim.js",
                        "~/Content/Roulette/js/CFinalBetPanel.js",
                        "~/Content/Roulette/js/CNeighborsPanel.js",
                        "~/Content/Roulette/js/CGameOver.js",
                        "~/Content/Roulette/js/CCreditsPanel.js",
                        "~/Content/Roulette/js/CHistory.js",
                        "~/Content/Roulette/js/CRollingTextController.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Roulette.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Roulette").Include(
                        "~/Content/Roulette/css/reset.css",
                        "~/Content/Roulette/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Racing

            bundles.Add(new ScriptBundle("~/Js/Racing").Include(
                        "~/Content/Racing/js/jquery-3.1.1.min.js",
                        "~/Content/Racing/js/createjs-2015.11.26.min.js",
                        "~/Content/Racing/js/ctl_utils.js",
                        "~/Content/Racing/js/sprite_lib.js",
                        "~/Content/Racing/js/settings.js",
                        "~/Content/Racing/js/CGameSettings.js",
                        "~/Content/Racing/js/CPreloader.js",
                        "~/Content/Racing/js/CMain.js",
                        "~/Content/Racing/js/CTextButton.js",
                        "~/Content/Racing/js/CToggle.js",
                        "~/Content/Racing/js/CGfxButton.js",
                        "~/Content/Racing/js/CMenu.js",
                        "~/Content/Racing/js/CGame.js",
                        "~/Content/Racing/js/CInterface.js",
                        "~/Content/Racing/js/CCreditsPanel.js",
                        "~/Content/Racing/js/CBetPanel.js",
                        "~/Content/Racing/js/CChipPanel.js",
                        "~/Content/Racing/js/CSimpleBetPanel.js",
                        "~/Content/Racing/js/CForecastPanel.js",
                        "~/Content/Racing/js/CBetList.js",
                        "~/Content/Racing/js/CFichesController.js",
                        "~/Content/Racing/js/CButBet.js",
                        "~/Content/Racing/js/CVector2.js",
                        "~/Content/Racing/js/CMsgBox.js",
                        "~/Content/Racing/js/CTrackBg.js",
                        "~/Content/Racing/js/CGreyhound.js",
                        "~/Content/Racing/js/CTweenController.js",
                        "~/Content/Racing/js/CRankingGui.js",
                        "~/Content/Racing/js/CArrivalPanel.js",
                        "~/Content/Racing/js/CWinPanel.js",
                        "~/Content/Racing/js/CLosePanel.js",
                        "~/Content/Racing/js/CButStartRace.js",
                        "~/Content/Racing/js/CAreYouSurePanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Racing.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Racing").Include(
                        "~/Content/Racing/css/reset.css",
                        "~/Content/Racing/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Soccer

            bundles.Add(new ScriptBundle("~/Js/Soccer").Include(
                        "~/Content/Soccer/js/jquery-2.0.3.min.js",
                        "~/Content/Soccer/js/createjs-2013.12.12.min.js",
                        "~/Content/Soccer/js/ctl_utils.js",
                        "~/Content/Soccer/js/sprite_lib.js",
                        "~/Content/Soccer/js/settings.js",
                        "~/Content/Soccer/js/CSlotSettings.js",
                        "~/Content/Soccer/js/CPreloader.js",
                        "~/Content/Soccer/js/CMain.js",
                        "~/Content/Soccer/js/CTextButton.js",
                        "~/Content/Soccer/js/CGfxButton.js",
                        "~/Content/Soccer/js/CToggle.js",
                        "~/Content/Soccer/js/CBetBut.js",
                        "~/Content/Soccer/js/CMenu.js",
                        "~/Content/Soccer/js/CGame.js",
                        "~/Content/Soccer/js/CReelColumn.js",
                        "~/Content/Soccer/js/CInterface.js",
                        "~/Content/Soccer/js/CPayTablePanel.js",
                        "~/Content/Soccer/js/CStaticSymbolCell.js",
                        "~/Content/Soccer/js/CTweenController.js",
                        "~/Content/Soccer/js/CMsgBox.js",
                        "~/Content/Soccer/js/CVector2.js",
                        "~/Content/Soccer/js/CBonusPanel.js",
                        "~/Content/Soccer/js/CSlotLogic.js",
                        "~/Content/Soccer/js/CSpinBut.js",
                        "~/Content/Soccer/js/CBonusGoalkeeper.js",
                        "~/Content/Soccer/js/CBonusPlayer.js",
                        "~/Content/Soccer/js/CBonusBall.js",
                        "~/Content/Soccer/js/CScoreText.js",
                        "~/Content/Soccer/js/CBonusResultPanel.js",
                        "~/Content/Soccer/js/CFreespinPanel.js",
                        "~/Content/Soccer/js/CAvatar.js",
                        "~/Content/Soccer/js/CCreditsPanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Soccer.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Soccer").Include(
                        "~/Content/Soccer/css/reset.css",
                        "~/Content/Soccer/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Arabia

            bundles.Add(new ScriptBundle("~/Js/Arabia").Include(
                        "~/Content/Arabia/js/jquery-2.0.3.min.js",
                        "~/Content/Arabia/js/createjs-2013.12.12.min.js",
                        "~/Content/Arabia/js/ctl_utils.js",
                        "~/Content/Arabia/js/sprite_lib.js",
                        "~/Content/Arabia/js/settings.js",
                        "~/Content/Arabia/js/CSlotSettings.js",
                        "~/Content/Arabia/js/CPreloader.js",
                        "~/Content/Arabia/js/CMain.js",
                        "~/Content/Arabia/js/CTextButton.js",
                        "~/Content/Arabia/js/CGfxButton.js",
                        "~/Content/Arabia/js/CToggle.js",
                        "~/Content/Arabia/js/CBetBut.js",
                        "~/Content/Arabia/js/CMenu.js",
                        "~/Content/Arabia/js/CGame.js",
                        "~/Content/Arabia/js/CReelColumn.js",
                        "~/Content/Arabia/js/CInterface.js",
                        "~/Content/Arabia/js/CPayTablePanel.js",
                        "~/Content/Arabia/js/CStaticSymbolCell.js",
                        "~/Content/Arabia/js/CTweenController.js",
                        "~/Content/Arabia/js/CMsgBox.js",
                        "~/Content/Arabia/js/CVector2.js",
                        "~/Content/Arabia/js/CFormatText.js",
                        "~/Content/Arabia/js/CWheelBonus.js",
                        "~/Content/Arabia/js/CBonusPanel.js",
                        "~/Content/Arabia/js/CLedsBonus.js",
                        "~/Content/Arabia/js/CSlotLogic.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Arabia.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Arabia").Include(
                        "~/Content/Arabia/css/reset.css",
                        "~/Content/Arabia/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Fruits

            bundles.Add(new ScriptBundle("~/Js/Fruits").Include(
                        "~/Content/Fruits/js/jquery-2.0.3.min.js",
                        "~/Content/Fruits/js/createjs-2013.12.12.min.js",
                        "~/Content/Fruits/js/ctl_utils.js",
                        "~/Content/Fruits/js/sprite_lib.js",
                        "~/Content/Fruits/js/settings.js",
                        "~/Content/Fruits/js/CSlotSettings.js",
                        "~/Content/Fruits/js/CPreloader.js",
                        "~/Content/Fruits/js/CMain.js",
                        "~/Content/Fruits/js/CTextButton.js",
                        "~/Content/Fruits/js/CGfxButton.js",
                        "~/Content/Fruits/js/CToggle.js",
                        "~/Content/Fruits/js/CBetBut.js",
                        "~/Content/Fruits/js/CMenu.js",
                        "~/Content/Fruits/js/CGame.js",
                        "~/Content/Fruits/js/CReelColumn.js",
                        "~/Content/Fruits/js/CInterface.js",
                        "~/Content/Fruits/js/CPayTablePanel.js",
                        "~/Content/Fruits/js/CStaticSymbolCell.js",
                        "~/Content/Fruits/js/CTweenController.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Fruits.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Fruits").Include(
                        "~/Content/Fruits/css/reset.css",
                        "~/Content/Fruits/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Chicken

            bundles.Add(new ScriptBundle("~/Js/Chicken").Include(
                        "~/Content/Chicken/js/jquery-2.0.3.min.js",
                        "~/Content/Chicken/js/createjs-2013.12.12.min.js",
                        "~/Content/Chicken/js/ctl_utils.js",
                        "~/Content/Chicken/js/sprite_lib.js",
                        "~/Content/Chicken/js/settings.js",
                        "~/Content/Chicken/js/CSlotSettings.js",
                        "~/Content/Chicken/js/CPreloader.js",
                        "~/Content/Chicken/js/CMain.js",
                        "~/Content/Chicken/js/CTextButton.js",
                        "~/Content/Chicken/js/CGfxButton.js",
                        "~/Content/Chicken/js/CToggle.js",
                        "~/Content/Chicken/js/CBetBut.js",
                        "~/Content/Chicken/js/CMenu.js",
                        "~/Content/Chicken/js/CGame.js",
                        "~/Content/Chicken/js/CReelColumn.js",
                        "~/Content/Chicken/js/CInterface.js",
                        "~/Content/Chicken/js/CPayTablePanel.js",
                        "~/Content/Chicken/js/CStaticSymbolCell.js",
                        "~/Content/Chicken/js/CTweenController.js",
                        "~/Content/Chicken/js/CBonusPanel.js",
                        "~/Content/Chicken/js/CCreditsPanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Chicken.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Chicken").Include(
                        "~/Content/Chicken/css/reset.css",
                        "~/Content/Chicken/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Space

            bundles.Add(new ScriptBundle("~/Js/Space").Include(
                        "~/Content/Space/js/jquery-2.0.3.min.js",
                        "~/Content/Space/js/createjs-2013.12.12.min.js",
                        "~/Content/Space/js/ctl_utils.js",
                        "~/Content/Space/js/sprite_lib.js",
                        "~/Content/Space/js/settings.js",
                        "~/Content/Space/js/CSlotSettings.js",
                        "~/Content/Space/js/CPreloader.js",
                        "~/Content/Space/js/CMain.js",
                        "~/Content/Space/js/CTextButton.js",
                        "~/Content/Space/js/CGfxButton.js",
                        "~/Content/Space/js/CToggle.js",
                        "~/Content/Space/js/CBetBut.js",
                        "~/Content/Space/js/CMenu.js",
                        "~/Content/Space/js/CGame.js",
                        "~/Content/Space/js/CReelColumn.js",
                        "~/Content/Space/js/CInterface.js",
                        "~/Content/Space/js/CPayTablePanel.js",
                        "~/Content/Space/js/CStaticSymbolCell.js",
                        "~/Content/Space/js/CTweenController.js",
                        "~/Content/Space/js/CBonusPanel.js",
                        "~/Content/Space/js/CCreditsPanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Space.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Space").Include(
                        "~/Content/Space/css/reset.css",
                        "~/Content/Space/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Christmas

            bundles.Add(new ScriptBundle("~/Js/Christmas").Include(
                        "~/Content/Christmas/js/jquery-2.0.3.min.js",
                        "~/Content/Christmas/js/createjs-2013.12.12.min.js",
                        "~/Content/Christmas/js/ctl_utils.js",
                        "~/Content/Christmas/js/sprite_lib.js",
                        "~/Content/Christmas/js/settings.js",
                        "~/Content/Christmas/js/CSlotSettings.js",
                        "~/Content/Christmas/js/CPreloader.js",
                        "~/Content/Christmas/js/CMain.js",
                        "~/Content/Christmas/js/CTextButton.js",
                        "~/Content/Christmas/js/CGfxButton.js",
                        "~/Content/Christmas/js/CToggle.js",
                        "~/Content/Christmas/js/CBetBut.js",
                        "~/Content/Christmas/js/CMenu.js",
                        "~/Content/Christmas/js/CGame.js",
                        "~/Content/Christmas/js/CReelColumn.js",
                        "~/Content/Christmas/js/CInterface.js",
                        "~/Content/Christmas/js/CPayTablePanel.js",
                        "~/Content/Christmas/js/CStaticSymbolCell.js",
                        "~/Content/Christmas/js/CTweenController.js",
                        "~/Content/Christmas/js/CBonusPanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Christmas.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Christmas").Include(
                        "~/Content/Christmas/css/reset.css",
                        "~/Content/Christmas/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Ramses

            bundles.Add(new ScriptBundle("~/Js/Ramses").Include(
                        "~/Content/Ramses/js/jquery-2.0.3.min.js",
                        "~/Content/Ramses/js/createjs-2013.12.12.min.js",
                        "~/Content/Ramses/js/ctl_utils.js",
                        "~/Content/Ramses/js/sprite_lib.js",
                        "~/Content/Ramses/js/settings.js",
                        "~/Content/Ramses/js/CSlotSettings.js",
                        "~/Content/Ramses/js/CPreloader.js",
                        "~/Content/Ramses/js/CMain.js",
                        "~/Content/Ramses/js/CTextButton.js",
                        "~/Content/Ramses/js/CGfxButton.js",
                        "~/Content/Ramses/js/CToggle.js",
                        "~/Content/Ramses/js/CBetBut.js",
                        "~/Content/Ramses/js/CMenu.js",
                        "~/Content/Ramses/js/CGame.js",
                        "~/Content/Ramses/js/CReelColumn.js",
                        "~/Content/Ramses/js/CInterface.js",
                        "~/Content/Ramses/js/CPayTablePanel.js",
                        "~/Content/Ramses/js/CStaticSymbolCell.js",
                        "~/Content/Ramses/js/CTweenController.js",
                        "~/Content/Ramses/js/CBonusPanel.js",
                        "~/Content/Ramses/js/CScoreText.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Ramses.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Ramses").Include(
                        "~/Content/Ramses/css/reset.css",
                        "~/Content/Ramses/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Pyramid

            bundles.Add(new ScriptBundle("~/Js/Pyramid").Include(
                        "~/Content/Pyramid/js/jquery-2.0.3.min.js",
                        "~/Content/Pyramid/js/createjs-2013.12.12.min.js",
                        "~/Content/Pyramid/js/ctl_utils.js",
                        "~/Content/Pyramid/js/sprite_lib.js",
                        "~/Content/Pyramid/js/settings.js",
                        "~/Content/Pyramid/js/CSlotSettings.js",
                        "~/Content/Pyramid/js/CPreloader.js",
                        "~/Content/Pyramid/js/CMain.js",
                        "~/Content/Pyramid/js/CTextButton.js",
                        "~/Content/Pyramid/js/CGfxButton.js",
                        "~/Content/Pyramid/js/CToggle.js",
                        "~/Content/Pyramid/js/CBetBut.js",
                        "~/Content/Pyramid/js/CMenu.js",
                        "~/Content/Pyramid/js/CGame.js",
                        "~/Content/Pyramid/js/CReelColumn.js",
                        "~/Content/Pyramid/js/CInterface.js",
                        "~/Content/Pyramid/js/CPayTablePanel.js",
                        "~/Content/Pyramid/js/CStaticSymbolCell.js",
                        "~/Content/Pyramid/js/CTweenController.js",
                        "~/Content/Pyramid/js/CMsgBox.js",
                        "~/Content/Pyramid/js/CVector2.js",
                        "~/Content/Pyramid/js/CBonusPanel.js",
                        "~/Content/Pyramid/js/CSlotLogic.js",
                        "~/Content/Pyramid/js/CSpinBut.js",
                        "~/Content/Pyramid/js/CBonusGoalkeeper.js",
                        "~/Content/Pyramid/js/CBonusPlayer.js",
                        "~/Content/Pyramid/js/CBonusBall.js",
                        "~/Content/Pyramid/js/CScoreText.js",
                        "~/Content/Pyramid/js/CBonusResultPanel.js",
                        "~/Content/Pyramid/js/CFreespinPanel.js",
                        "~/Content/Pyramid/js/CAvatar.js",
                        "~/Content/Pyramid/js/CCreditsPanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Pyramid.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Pyramid").Include(
                        "~/Content/Pyramid/css/reset.css",
                        "~/Content/Pyramid/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Keno

            bundles.Add(new ScriptBundle("~/Js/Keno").Include(
                        "~/Content/Keno/js/jquery-2.0.3.min.js",
                        "~/Content/Keno/js/createjs-2014.12.12.min.js",
                        "~/Content/Keno/js/ctl_utils.js",
                        "~/Content/Keno/js/sprite_lib.js",
                        "~/Content/Keno/js/settings.js",
                        "~/Content/Keno/js/CLang.js",
                        "~/Content/Keno/js/CPreloader.js",
                        "~/Content/Keno/js/CMain.js",
                        "~/Content/Keno/js/CTextButton.js",
                        "~/Content/Keno/js/CTextToggle.js",
                        "~/Content/Keno/js/CToggle.js",
                        "~/Content/Keno/js/CNumToggle.js",
                        "~/Content/Keno/js/CGfxButton.js",
                        "~/Content/Keno/js/CMenu.js",
                        "~/Content/Keno/js/CGame.js",
                        "~/Content/Keno/js/CInterface.js",
                        "~/Content/Keno/js/CHelpPanel.js",
                        "~/Content/Keno/js/CEndPanel.js",
                        "~/Content/Keno/js/CPayouts.js",
                        "~/Content/Keno/js/CAnimBalls.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Keno.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Keno").Include(
                        "~/Content/Keno/css/reset.css",
                        "~/Content/Keno/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //Bingo

            bundles.Add(new ScriptBundle("~/Js/Bingo").Include(
                        "~/Content/Bingo/js/jquery-2.0.3.min.js",
                        "~/Content/Bingo/js/createjs-2014.12.12.min.js",
                        "~/Content/Bingo/js/ctl_utils.js",
                        "~/Content/Bingo/js/sprite_lib.js",
                        "~/Content/Bingo/js/settings.js",
                        "~/Content/Bingo/js/CLang.js",
                        "~/Content/Bingo/js/CPreloader.js",
                        "~/Content/Bingo/js/CMain.js",
                        "~/Content/Bingo/js/CTextButton.js",
                        "~/Content/Bingo/js/CTextSpritesheetBut.js",
                        "~/Content/Bingo/js/CToggle.js",
                        "~/Content/Bingo/js/CGfxButton.js",
                        "~/Content/Bingo/js/CToggleText.js",
                        "~/Content/Bingo/js/CMenu.js",
                        "~/Content/Bingo/js/CGame.js",
                        "~/Content/Bingo/js/CInterface.js",
                        "~/Content/Bingo/js/CEndPanel.js",
                        "~/Content/Bingo/js/CAnimBalls.js",
                        "~/Content/Bingo/js/CCardSelection.js",
                        "~/Content/Bingo/js/CCard.js",
                        "~/Content/Bingo/js/CMsgBox.js",
                        "~/Content/Bingo/js/CNumberBoard.js",
                        "~/Content/Bingo/js/CNumberBoardCell.js",
                        "~/Content/Bingo/js/CBallExtracted.js",
                        "~/Content/Bingo/js/CPaytablePanel.js",
                        "~/Content/Bingo/js/CPaytableCard.js",
                        "~/Content/Bingo/js/CDisplayText.js",
                        "~/Content/Bingo/js/CAreYouSurePanel.js",
                        "~/ContentBase/js/fullscreen.js",
                        "~/Loader/Bingo.js",
                        "~/ContentBase/js/commons_events.js"));

            bundles.Add(new StyleBundle("~/Css/Bingo").Include(
                        "~/Content/Bingo/css/reset.css",
                        "~/Content/Bingo/css/main.css",
                        "~/ContentBase/css/orientation_utils.css"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}
