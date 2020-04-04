# Juniper Tree Resource Agregator

The Juniper Tree stack gives you a fast, free and scalable way to publish crowd-sourced, moderated, resource links to your own domain.

## Technical stack

- Google Sheet with data
- Converted to a static website with 11ty
- Deployed to Netlify

## Set up Netlify

- Log in to your Netlify account
- Click `New site from git` and select your Git provider. (You will need to grant Netlify access to your account)
- Pick a repository from your account, and select correct branch to deploy (usually `master`)
- Set build command to `npm run production` and publish directory to `dist`
- Deploy site

You will need a build hook to trigger content updates:

- Under `Site Settings`, click `Build and Deploy` > `Build hooks` > `Add build hook`
- This will generate an API link with your build hook ID. You will need to add this to your Google Sheet, eg. https://api.netlify.com/build_hooks/<Your build hook ID>

## DNS

Nameservers

- The nameservers for Netlify can be found under your Netlify team > Domains
- These need adding to your registrar

Your site can be run from a subdomain by creating a CNAME record from your subdomain to Netlify's default subdomain

## Set up a Google Sheet

- [Make a copy of the sheet template](bit.ly/juniper-template)
- Click `File` > `Publish to the web` in the menu bar
- Click `Tools` > `Script editor` and fill in your Netlify build hook ID and save the changes.
- You can optionally use the `Lists` tab, to perform validation on the data that comes in via the form
- Resources can be added manually in the `Form Responses` tab

The first time you publish your content by clicking `Publish` > `Update` from the menu, your script will ask you for permissions to run.

Only rows ticked as `Verified` will be published.

## Configure the app

Edit the values in `config.js` to link your app to your spreadsheet and tweak the site theme, title and other meta data

Also fill out the `about.md` file for giving more information about your collection and for communicating your contact details.

### ⚠️ Warning

The JSON endpoint provided by the Google Sheet will stop providing data as soon as it hits an empty row. You have been warned.

## Hosting with another service?

As soon as you run `npm run production` everything you need is created in the `/dist` folder. This folder can be copied across into your hosting platform of choice.

### Surge

[Surge](https://surge.sh/) is a quick an easy tool for deploying static sites. You won't get the benefits of automagical deploys straight from the Google Sheet, but one you have Surge installed locally (`npm install -g surge`), you can deploy with:

```bash
surge dist
```

### Self host

Let's say you have a Digital Ocean droplet with Nginx or Apache on it. Once you have cloned this repo you can then run…

```bash
npm install
npm run production
```

Finally update your server config to serve from the `./dist` and everything should be happy.

## Contribute

Juniper Tree is released under the MIT public license. See the enclosed `LICENSE` for details.

If you would like to contribute to improve this tool, we would welcome any pull requests.
