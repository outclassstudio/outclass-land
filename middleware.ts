//! middleware는 edge runtime에서 실행됨

import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";
import { getUser } from "./apis/user/actions";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
  "/github/start": true,
  "/github/complete": true,
};

export async function middleware(request: NextRequest) {
  // const session = await getSession();
  // const exists = publicOnlyUrls[request.nextUrl.pathname];
  // if (!session.id) {
  //   if (!exists) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // } else {
  //   if (exists) {
  //     return NextResponse.redirect(new URL("/program", request.url));
  //   }
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
