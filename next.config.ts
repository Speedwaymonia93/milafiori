import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'oskmilafiori.pl' }],
        destination: 'https://osk-milafiori.pl/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.oskmilafiori.pl' }],
        destination: 'https://osk-milafiori.pl/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.osk-milafiori.pl' }],
        destination: 'https://osk-milafiori.pl/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
