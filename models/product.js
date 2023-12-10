const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const products = [];

const getProductsFromFile = (cb) => {
  fs.readFile(
    path.join(__dirname, "..", "data", "products.json"),
    (err, fileContent) => {
      err ? cb([]) : cb(JSON.parse(fileContent));
    }
  );
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    const p = path.join(__dirname, "..", "data", "products.json");
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
    fs.readFile(p, (err, fileCotent) => {});
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
