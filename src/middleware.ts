import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware() {
  // const response = await ageRestrictionHandler(request);

  // If the age restriction handler returns a response, use it; otherwise, proceed.
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
