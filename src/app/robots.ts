import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'Applebot', 'Google-Extended', 'PerplexityBot', 'Bingbot', 'YandexBot', 'DuckDuckBot', 'BraveBot', 'facebot', 'ia_archiver'],
        allow: '/',
      }
    ],
    sitemap: 'https://rhevez.com/sitemap.xml',
  };
}
