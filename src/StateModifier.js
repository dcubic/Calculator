import { evaluate } from "mathjs";

const OPERATORS = ["*", "/", "+", "-"];
const OPERATORS_NON_SUBTRACT = ["*", "/", "+"];
const SUBTRACTION_SIGN = "-";
const DIGITS_NON_ZERO = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ZERO = "0";
const EQUALS_SIGN = "=";
const DECIMAL = ".";
const CLEAR_STRING = "AC";

export function determineNextState(stateInitial, inputNext) {
    if (OPERATORS_NON_SUBTRACT.includes(inputNext)) {
        return determineNextStateOperatorsNotSubtract(stateInitial, inputNext);
    } else if (DIGITS_NON_ZERO.includes(inputNext)) {
        return determineNextStateNonZeroDigits(stateInitial, inputNext);
    } else if (inputNext === ZERO) {
        return deterimineNextStateZero(stateInitial);
    } else if (inputNext === SUBTRACTION_SIGN) {
        return determineNextStateSubtract(stateInitial);
    } else if (inputNext === EQUALS_SIGN) {
        return determineNextStateEquals(stateInitial);
    } else if (inputNext === DECIMAL) {
        return determineNextStateDecimal(stateInitial);
    } else if (inputNext === CLEAR_STRING) {
        return determineNextStateClear();
    }

    return stateInitial;
}

function determineNextStateOperatorsNotSubtract(stateInitial, inputNext) {
    return null;
}

function determineNextStateNonZeroDigits(stateInitial, inputNext) {
    return {
        result: stateInitial.result,
        input: stateInitial.input.concat(inputNext)
    };
}

function deterimineNextStateZero(stateInitial) {
    return null;
}

function determineNextStateSubtract(stateInitial) {
    let inputOld = stateInitial.input;
    if (inputOld.length === 1 && inputOld[0] === SUBTRACTION_SIGN) {
        return stateInitial
    } else {
        return {
            result: stateInitial.result,
            input: inputOld.concat(SUBTRACTION_SIGN)
        }
    }
}

function determineNextStateEquals(stateInitial) {
    const inputOld = stateInitial.input;
    const inputOldLength = inputOld.length;
    const resultOld = stateInitial.result;
    if (inputOld === "") {
        return stateInitial;
    } else if (OPERATORS.includes(inputOld[inputOldLength - 1])) {
        return stateInitial;
    } else if (resultOld !== "" && OPERATORS.includes(inputOld[0])) {
        let evaluatedExpression = evaluate(resultOld.concat(inputOld)).toString();
        return {
            result: evaluatedExpression,
            input: ""
        }
    } else {
        let evaluatedInput = evaluate(inputOld).toString();
        return {
            result: evaluatedInput,
            input: ""
        }
    }
}

function determineNextStateDecimal(stateInitial) {
    const inputOld = stateInitial.input;
    const resultOld = stateInitial.result;
    const decimalCheckerRegularExpression = /\./;
    if (decimalCheckerRegularExpression.test(inputOld)) {
        return stateInitial;
    } else if (inputOld.length === 0) {
        return {
            input: "0.",
            result: resultOld
        }
    } else {
        return {
            result: resultOld,
            input: inputOld.concat(DECIMAL)
        }
    }
}

function determineNextStateClear() {
    return {
        result: "",
        input: ""
    };
}