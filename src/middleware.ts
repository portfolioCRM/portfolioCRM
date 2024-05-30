import { NextResponse, type NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
  const baseUrl = request.nextUrl.origin
  try {
    return NextResponse.next();
  } catch (error) {
    return NextResponse.rewrite(`${baseUrl}/not-found`)
  }
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}