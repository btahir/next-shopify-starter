# Next.js + Tailwind CSS Starter

This starter shows how to use [Tailwind CSS](https://tailwindcss.com/) (v2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

## How to use

Change into the project directory and run the following command:

```
yarn && yarn dev
```

### Update Site Metadata

You can update your site metadata in the next.config.js file. 

```
env: {
  siteTitle: 'Your Company',
  siteDescription: 'Your company description.',
  siteKeywords: 'your company keywords',
  siteUrl: 'https://next-tailwind-blue.vercel.app',
  siteImagePreviewUrl: '/images/blue.png',
  twitterHandle: '@your_handle'
} 
```

### Update Colors

You can update the color palette in tailwind.config.js file.

```
colors: {
  palette: {
    lighter: '',
    light: '',
    primary: '',
    dark: '',
  },
},
```
### Update Progressive Web App (PWA) data

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.
