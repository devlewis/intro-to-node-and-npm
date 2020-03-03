const validMethods = [`glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow`];
const scriptArg = process.argv[2];
const method = validMethods.includes(scriptArg) ? scriptArg : "rainbow";

const chalk = require("chalk-animation");

function animateString(string) {
  const animation = chalk[method](string);

  setTimeout(() => animation.stop(), 2000);
}

module.exports = { animateString };
