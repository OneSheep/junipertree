const axios = require("axios");
const fs = require("fs");
const { metadata } = require("../../config.js");

const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${metadata.sheetId}/1/public/values?alt=json`;
const outputPath = `${__dirname}/../_data/sheet.json`;

let sanitize = function(s) {
  return s.toString().replace(/'+/g, "");
  // .replace(/'+/g, "&apos;");
};

let log = function(message) {
  //   if (process.env.ELEVENTY_ENV === "production") return;
  console.log(message);
};

axios
  // fetch the data from the Google Sheets API
  .get(googleSheetUrl)

  // save it locally in a nice format
  .then(response => {
    var data = {};

    response.data.feed.entry.forEach(item => {
      if (item.gsx$verified.$t !== "TRUE" || !item.gsx$title.$t) return;

      let section = sanitize(item.gsx$section.$t) || "Uncategorised";

      if (data.hasOwnProperty(section) == false) {
        data[section] = [];
      }

      data[section].push({
        timestamp: item.gsx$timestamp.$t,
        title: item.gsx$title.$t,
        url: item.gsx$url.$t,
        section: section,
        type: item.gsx$type.$t,
        source: item.gsx$source.$t,
        country: item.gsx$country.$t,
        paid: item.gsx$paid.$t === "Yes",
        date: item.gsx$startdate.$t,
        enddate: item.gsx$enddate.$t,
        time: item.gsx$time.$t,
        timezone: item.gsx$timezone.$t,
        host: item.gsx$host.$t,
        contributor: item.gsx$contributor.$t
      });

      log(`✅ ${item.gsx$title.$t}`);
    });

    // save locally
    fs.writeFile(outputPath, JSON.stringify(data), err => {
      if (err) {
        console.log(err);
        return;
      }
      log(`Data saved to: ${outputPath}`);
    });
  })

  // report any errors we might encounter
  .catch(error => console.log("Error :", error));
