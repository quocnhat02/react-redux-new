const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("kepler_dataa.csv")
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });

parse();