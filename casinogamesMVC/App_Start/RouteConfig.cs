using System.Web.Mvc;
using System.Web.Routing;

namespace Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.AppendTrailingSlash = true;
            routes.LowercaseUrls = true;

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{file}.css");
            routes.IgnoreRoute("{file}.js");

            // Enable attribute routing.
            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Homepage",
                url: "",
                defaults: new { controller = "Game", action = "Poker" }
            );
            routes.MapRoute(
                name: "Resource",
                url: "Resource/{action}",
                defaults: new { controller = "Resource", action = "Poker"}
            );

            routes.MapRoute(
                name: "Default",
                url: "{action}/{id}",
                defaults: new { controller = "Game", action = "Poker", id = UrlParameter.Optional }
            );
        }
    }
}
