class OilPrice {
  constructor(name, last, change, percent_change, delay) {
    this.name = name;
    this.last = last;
    this.change = change;
    this.percent_change = percent_change;
    this.delay = delay;
  }
}

module.exports = OilPrice;
