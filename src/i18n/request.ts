import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
   console.log(requestLocale,"rl");
   
  const requested = await  requestLocale;
 console.log(requested,"requested");
 
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 console.log(locale,"l");
 
  return {
    locale,
    messages: (
      await import(`../messages/${locale}.json`)
    ).default,
  };
});