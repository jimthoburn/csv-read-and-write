
'use strict';

let fs        = require('fs');
let mkdirp    = require('mkdirp');
let parse     = require('csv-parse/lib/sync');
let stringify = require('csv-stringify');


// Load the CSV data
// https://data.lacounty.gov/Geospatial/ZIP-Codes/65v5-jw9f/data
let zipCodesLACounty = parse(fs.readFileSync('data/zip-codes-la-county.csv', 'utf8'), {columns: true});


// Create a new data set for the results
let results = [];


// Add some useful data
results.push(["value for column a", "value for column b"]);


// Loop through CSV data
zipCodesLACounty.forEach(function(row) {
  // Do something useful
});


// Save the data a new spreadsheet
let resultsColumnNames = [["Column A", "Column B"]];
let csvArray = resultsColumnNames.concat(results);
console.dir(csvArray);
let csvWritePath = "./data-generated";
let csvFileName = "results.csv";
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

