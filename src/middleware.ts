import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./lib/auth.config";

const locales = ["es", "en"];

function getLocale(request: NextRequest) {
  let headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "es";
  const lang = match(languages, locales, defaultLocale);

  return lang;
}

async function handler(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await NextAuth(authConfig).auth();
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  const locale = getLocale(request);

  if (!session) {
    if (pathnameHasLocale) {
      let copy = pathname.split("/");
      copy.shift();
      copy.shift();
      request.nextUrl.pathname = copy.join("/");
    }

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      const locale = getLocale(request);
      request.nextUrl.pathname = `/${locale}/login`;
      return NextResponse.redirect(request.nextUrl);
    }
  }

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export default handler;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
