class OilPrice {
  constructor(name, last, change, percent_change, last_updated) {
    this.name = name;
    this.last = last;
    this.change = change;
    this.percent_change = percent_change;
    this.last_updated = last_updated;
  }
}

module.exports = OilPrice;
