# Next.js + Tailwind CSS + Shopify Starter

This is an attempt at building a minimal but fully functional eCommerce store that uses Next.js + Tailwind CSS in the front end and leverages the Shopify Storefront API
to interact with your Shopify backend.

You can see it in action on this live Shopify store: https://doggystickers.xyz/

Yes - you can buy the stickers. :)

The store was inspired by the awesome Gatsby Swag Store.

## The Tech

* Next.js + Tailwind CSS
* React Hooks
* GraphQL
* Shopify
* Vercel
## How to use

By default, the store is set to query and show all products in one collection. 
You can extend this to query multiple collections or your whole store.

#### A note on pagination in the GraphQL queries

The graphQL queries are all hardcoded to pull the maximum number of products/variants/images which
is set to 250 by Shopify. I did this for simplicity rather than setting up any pagination and making the queries complicated.
This should work for the majority of use cases as having over 250 of these items is rare.

### Setup Envornment variables

Create a .env.local file in the root directory. You need to add these 4 variables:

```
SHOPIFY_STORE_FRONT_ACCESS_TOKEN=
SHOPIFY_STORE_DOMAIN=
SHOPIFY_COLLECTION=
NEXT_PUBLIC_LOCAL_STORAGE_NAME=
```

The SHOPIFY_STORE_FRONT_ACCESS_TOKEN and SHOPIFY_STORE_DOMAIN (it will be something like DOMAIN_NAME.myshopify.com) are needed to access
the Shopify Storefront API (make sure you have se it up in your Shopify store: https://shopify.dev/docs/storefront-api/getting-started).

SHOPIFY_COLLECTION is the name of the collection you want to pull in and NEXT_PUBLIC_LOCAL_STORAGE_NAME is the name of the key
your users will store their cart information under. The exact name isn't that important although I suggest you make it unique so
it is less likely to clash with other stored objects. Something like yourStoreNameShopifyStore where yourStoreName is your shopify store name will suffice.

### Installation

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
