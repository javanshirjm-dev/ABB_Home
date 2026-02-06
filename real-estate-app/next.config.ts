import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// It will now automatically find i18n/request.ts at the root
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);