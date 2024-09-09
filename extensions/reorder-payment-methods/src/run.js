// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  let paymentMethods = {};
  let operations = [];

  input.paymentMethods.forEach((method) => {
    let methodName = method.name.toUpperCase();
    if (methodName.includes("Cash")) {
      paymentMethods.Cash = method;
    } else if (methodName.includes("Credit")) {
      paymentMethods.Credit = method;
    } else if (methodName.includes("BANK")) {
      paymentMethods.BANK = method;
    }
  });

  if (paymentMethods.BANK) {
    operations.push({
      move: {
        index: operations.length,
        paymentMethodId: paymentMethods.BANK.id,
      },
    });
  }

  if (paymentMethods.Credit) {
    operations.push({
      move: {
        index: operations.length,
        paymentMethodId: paymentMethods.Credit.id,
      },
    });
  }

  if (paymentMethods.Cash) {
    operations.push({
      move: {
        index: operations.length,
        paymentMethodId: paymentMethods.Cash.id,
      },
    });
  }

  return { operations };
}
