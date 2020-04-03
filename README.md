# Juniper Tree Resource Agregator

The Juniper Tree stack gives you a fast, free and scalable way to publish crowd-sourced, moderated, resource links to your own domain.

## Technical stack

- Google Sheet with data
- Converted to a static website with 11ty
- Deployed to Netlify

## Set up Netlify

- Log in to your Netlify account
- Click `New site from git` and enter your public repo link
- Set build command to `npm run production` and publish directory to `dist`
- Add a deploy hook to trigger content updates:
- Tap `Build and Deploy` > `Build hooks` > `Add build hook`
- Note the build hook id which you will need in the next section
- Forward your site to your own public domain

## Set up a Google Sheet

- [Make a copy of the sheet template](https://docs.google.com/spreadsheets/d/1OaLb4Rq-M1ucJVatuyoc-5muFAe4bwaOGVXfD48AcrQ/copy?usp=sharing)
- Tap `File` > `Publish to the web` in the menu bar
- Tap `Tools` > `Script editor` and fill in your netlify build hook id and save the changes.
- On the `Lists` tab, fill in your sections and resource types
- Add some resources in the `Content` tab

The first time you select `Publish` > `Update` your script will ask you for permissions to run.

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
