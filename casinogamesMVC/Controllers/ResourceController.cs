using System.Web.Mvc;

namespace Web.Controllers
{
    public class ResourceController : BaseController
    {
        public JavaScriptResult Poker()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Poker.ResourceManager, "Poker", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Roulette()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Roulette.ResourceManager, "Roulette", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Racing()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Racing.ResourceManager, "Racing", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Soccer()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Soccer.ResourceManager, "Soccer", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Arabia()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Arabia.ResourceManager, "Arabia", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Fruits()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Fruits.ResourceManager, "Fruits", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Chicken()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Chicken.ResourceManager, "Chicken", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Ramses()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Ramses.ResourceManager, "Ramses", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Christmas()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Christmas.ResourceManager, "Christmas", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Space()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Space.ResourceManager, "Space", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Pyramid()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Pyramid.ResourceManager, "Pyramid", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Keno()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Keno.ResourceManager, "Keno", HttpContext.Session["locale"].ToString());
        }

        public JavaScriptResult Bingo()
        {
            return Helpers.Javascript.JavascriptResources(Resources.Game.Bingo.ResourceManager, "Bingo", HttpContext.Session["locale"].ToString());
        }
    }
}