import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
    console.log("🔥 MIDDLEWARE IS RUNNING FOR:", request.nextUrl.pathname);

    const handleI18nRouting = createMiddleware({
        locales: ['en', 'az', 'fr'],
        defaultLocale: 'en'
    });

    const response = handleI18nRouting(request);
    return response;
}

export const config = {
    matcher: ['/', '/(az|en|fr)/:path*']
};