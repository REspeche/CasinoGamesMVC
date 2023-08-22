using System;
using System.Globalization;
using System.Resources;
using System.Text;
using System.Web.Mvc;

namespace Web.Helpers
{
    public static class Javascript
    {
        public static JavaScriptResult JavascriptResources(ResourceManager manager, string resourceObjectName, string locale)
        {
            var culture = new CultureInfo(locale);
            ResourceSet resourceSet = manager.GetResourceSet(culture, true, true);

            StringBuilder sb = new StringBuilder();

            var enumerator = resourceSet.GetEnumerator();
            String value = String.Empty;
            while (enumerator.MoveNext())
            {
                value = System.Web.HttpUtility.JavaScriptStringEncode(enumerator.Value.ToString());
                if (value.Split('|').Length > 1)
                {
                    String valueArray = String.Empty;
                    foreach (string i in value.Split('|'))
                    {
                        if (valueArray != "") valueArray += ",";
                        valueArray += "'"+ i + "'";
                    }
                    sb.AppendFormat("{0}=new Array({1});\n", enumerator.Key, valueArray);
                }
                else sb.AppendFormat("{0}='{1}';\n", enumerator.Key, value);
            }

            return new JavaScriptResult()
            {
                Script = sb.ToString()
            };
        }
    }
}