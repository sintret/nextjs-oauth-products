import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// export default function middleware(req: NextRequest) {
//   const isLogin = false;
//   if (isLogin) {
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }
// }

// export const config = {
//   matcher: ["/product", "/about"],
// };

export function mainMiddleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/profile", "/product", "/admin"]);
