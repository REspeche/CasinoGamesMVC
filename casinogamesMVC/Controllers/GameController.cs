using System.Web.Mvc;

namespace Web.Controllers
{
    [RoutePrefix("")]
    public class GameController : BaseController
    {
        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Poker()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Roulette()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Racing()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Soccer()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Arabia()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Fruits()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Space()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Ramses()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Christmas()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Chicken()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Pyramid()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Keno()
        {
            return View();
        }

        [CompressFilter(Order = 1)]
        [CacheFilter(Duration = 5, Order = 2)]
        public ActionResult Bingo()
        {
            return View();
        }
    }
}