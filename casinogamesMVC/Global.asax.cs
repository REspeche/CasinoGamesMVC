using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            Application["locale_default"] = "es";
        }

        protected void Session_Start()
        {
            Session["locale"] = String.Empty;
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            HttpApplication app = sender as HttpApplication;
            app.Response.Filter = null;
        }
    }
}
