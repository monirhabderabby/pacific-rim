import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Handles age restriction logic.
 * Redirects users without the proper "age-restriction" cookie or those marked as restricted.
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse | boolean} - A redirection response or `false` if no restriction applies.
 */
export async function ageRestrictionHandler(request: NextRequest) {
  const isAgeAlertPath = request.nextUrl.pathname === "/age-alert";

  // Retrieve the "age-restriction" cookie
  const ageRestrictionValue = cookies().get("age-restriction");

  if (isAgeAlertPath) {
    if (ageRestrictionValue && ageRestrictionValue.value === "false") {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  }

  // If the cookie is missing or indicates a restricted user, redirect to "/age-alert"
  if (!ageRestrictionValue || ageRestrictionValue.value === "true") {
    console.log("User is not allowed to access the site");
    return NextResponse.redirect(new URL("/age-alert", request.url));
  }

  // Allow requests to "/age-alert" to bypass restrictions

  // Proceed with the request
  return NextResponse.next();
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = await ageRestrictionHandler(request);

  // If the age restriction handler returns a response, use it; otherwise, proceed.
  return response || NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
