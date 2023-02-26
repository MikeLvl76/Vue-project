const operatorsFunction = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// Change this later because it's unsecure
export function calculate(str) {
  if (!str.match(/^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/)) return 'Error';
  return eval(str.replace(/\s+/g, ''));
}
