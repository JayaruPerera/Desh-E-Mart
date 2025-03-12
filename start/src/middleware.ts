import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
	'/admin', 
	'/admin/*', 
	'/admin/dashboard', 
	'/admin/dashboard/*',
	'/admin/dashboard/products',
	'/admin/dashboard/products/*',
	'/admin/dashboard/products/newProduct',
	'/admin/dashboard/products/newProduct/*'
  ]);

export default clerkMiddleware((auth, req) => {
	// Protect routes that require authentication
	if (isProtectedRoute(req)) {
		// First ensure the user is authenticated
		auth.protect();
	}
});

export const config = {
	matcher: [
		"/((?!_next|[^?]\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).)",
		"/(api|trpc)(.*)",
	],
	publicRoutes: ["/"], // Allow the home page without authentication
};