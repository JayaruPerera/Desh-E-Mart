
import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

	// Admin email for authorization
	const ADMIN_EMAILS = ["jayaruperera1998@gmail.com"];
	const isProtectedRoute = createRouteMatcher(['/admin/dashboard']);
	const isAdminRoute = createRouteMatcher(['/admin/dashboard']);
	
	export default clerkMiddleware((auth, req) => {
		// Protect routes that require authentication
		if (isProtectedRoute(req)) auth.protect()
			// For admin routes, check if the user is an admin
		if (isAdminRoute(req)) {
			const email = auth.userId ? 
			  auth.sessionClaims?.email as string : 
			  null;
			
			// If not an admin, redirect to home page
			if (!email || !ADMIN_EMAILS.includes(email)) {
			  return NextResponse.redirect(new URL('/', req.url));
			}
		  }
		});
	
	export const config = {
		matcher: [
			"/((?!_next|[^?]\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).)",
			"/(api|trpc)(.*)",
		],
		publicRoutes: ["/"], // Allow the home page without authentication
	};

