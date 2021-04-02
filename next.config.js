const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Doggy Stickers',
    siteDescription: 'Get some Doggy Stickers!',
    siteKeywords: 'dog, stickers, fun',
    siteUrl: 'https://doggystickers.xyz',
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@deepwhitman'
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
