import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const baseUrl = request.nextUrl.origin
  const currentPath = request.nextUrl.pathname

  // If we're not at the root path, redirect to base URL
  if (currentPath !== '/') {
    return NextResponse.redirect(baseUrl, {
      status: 302 // Temporary redirect
    })
  }

  return NextResponse.next()
}

// Match everything except static files and api routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (image files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)'
  ]
}
