
'use strict';

let fs        = require('fs');
let mkdirp    = require('mkdirp');
let parse     = require('csv-parse/lib/sync');
let stringify = require('csv-stringify');


// Load the CSV data

// https://data.lacounty.gov/Geospatial/ZIP-Codes/65v5-jw9f/data
let zipCodesLACounty = parse(fs.readFileSync('data/zip-codes-la-county.csv', 'utf8'), {columns: true});


// Create a new data set with some useful results
let results = [];


// Save the data a new spreadsheet
let resultsColumnNames = ["Column A", "Column B"];
let csvArray = [];
let csvWritePath = "./data-generated";
let csvFileName = "results.csv";
csvArray.push(resultsColumnNames.concat(results));
stringify(csvArray, function(err, output) {
  mkdirp(csvWritePath, function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync(csvWritePath + '/' +  csvFileName, output, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
});

