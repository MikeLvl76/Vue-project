const operatorsFunction = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// Change this later because it's unsecure
export function calculate(str) {
  if (!str.match(/^\s*([-+]?)(\d*\.?\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d*\.?\d+)\s*)+$/)) return 'Error';
  return eval(str.replace(/\s+/g, ''));
}
