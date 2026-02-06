import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'az', 'fr'];

// FIX: We destructure 'requestLocale' instead of 'locale'
export default getRequestConfig(async ({ requestLocale }) => {
    // FIX: We must await the promise to get the actual string
    let locale = await requestLocale;

    // Validate: If no locale found or it's invalid, show 404
    if (!locale || !locales.includes(locale as any)) {
        notFound();
    }

    return {
        locale, // This is now a valid string, so TypeScript will be happy
        messages: (await import(`../messages/${locale}.json`)).default
    };
});