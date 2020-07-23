/* eslint-env node */

const coffee = require("coffeescript");
const babelJest = require("babel-jest");

module.exports = {
  process: (src, path, ...rest) => {
    if (coffee.helpers.isCoffee(path)) {
      const c1 = coffee.compile(src, { bare: true });
      const c2 = babelJest.process(c1, path, ...rest);
      return c2;
    }
    return src;
  }
};
