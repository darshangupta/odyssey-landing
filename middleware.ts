import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If the path is not the root path '/', redirect to the home page
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: '/:path*',
}
