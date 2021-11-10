const axios = require("axios");
const Papa = require("papaparse");
const fs = require("fs");
const cheerio = require("cheerio");
const OilPrice = require("./models/oilPrice");

let elements = [];

axios("https://oilprice.com/oil-price-charts/").then((res) => {
  const $ = cheerio.load(res.data);
  $("tr").each((i, el) => {
    const oilPrice = new OilPrice(
      $($(el).find("td").get(1)).text(),
      $($(el).find("td").get(2)).text(),
      $($(el).find("td").get(3)).text(),
      $($(el).find("td").get(4)).text().slice(0, 6),
      $($(el).find("td").get(4)).text().slice(6)
    );

    console.log(oilPrice);

    elements.push(oilPrice);

    fs.writeFileSync("out.csv", Papa.unparse(elements));
  });
});
