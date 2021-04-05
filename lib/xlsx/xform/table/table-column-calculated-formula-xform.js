const BaseXform = require('../base-xform');

class CalculatedColumnFormulaXform extends BaseXform {
  get tag() {
    return 'calculatedColumnFormula';
  }

  prepare(model, options) {
    // todo
  }

  render(xmlStream, model) {
    // todo
  }

  parseOpen(node) {
    if (node.name === this.tag) {
      // todo
      return true;
    }
    return false;
  }

  parseText() {}

  parseClose() {
    return false;
  }
}

module.exports = FilterColumnXform;
