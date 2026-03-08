import { NextResponse } from 'next/server';

// 1. You MUST export a function named 'middleware' 
// or export it as 'default'
export function middleware(request) {
    // Your logic here (e.g., checking cookies, redirecting)
    return NextResponse.next();
}

// 2. Optional: Define which paths this middleware runs on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};