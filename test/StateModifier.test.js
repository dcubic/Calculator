import { expect } from "chai";
import { determineNextState } from "../src/StateModifier.js";

describe("StateModifier Test Suite", () => {
    it("Digit Pressed: [1, 9]", () => {
        for (let i = 1; i <= 9; i++) {
            const digitString = i.toString();
            const resultInitial = "";
            const inputInitial = "42x";
            let stateInitial = {
                result: resultInitial,
                input: inputInitial
            };
            let stateExpected = {
                result: resultInitial,
                input: inputInitial.concat(digitString)
            };

            let stateActual = determineNextState(stateInitial, digitString);
            expect(stateActual).to.deep.equal(stateExpected);
        }
    });

    it("Operation Pressed: - at the start of the string", () => {
        let stateInitial = {
            result: "",
            input: ""
        };
        let input = "-";
        let stateExpected = {
            result: "",
            input: input
        };

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: -- at the start of the string; should not append", () => {
        let stateInitial = {
            result: "",
            input: "-"
        };
        let input = "-";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: + at the start of the string with no previous result", () => {
        let stateInitial = {
            result: "",
            input: ""
        };
        let input = "+";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: x at the start of the string with no previous result", () => {
        let stateInitial = {
            result: "",
            input: ""
        };
        let input = "x";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: / at the start of the string with no previous result", () => {
        let stateInitial = {
            result: "",
            input: ""
        };
        let input = "/";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: / at the start of the string with previous result", () => {

    });

    it("Operation Pressed: + at the start of the string with previous result", () => {

    });

    it("Operation Pressed: x at the start of the string with previous result", () => {

    });

    it("Operation Pressed: double x", () => {
        let stateInitial = {
            result: "",
            input: "5x"
        };
        let input = "x";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: double /", () => {
        let stateInitial = {
            result: "",
            input: "5/"
        };
        let input = "/";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Operation Pressed: double +", () => {
        let stateInitial = {
            result: "",
            input: "5+"
        };
        let input = "+";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });
    
    it("Operation Pressed: double - not at start of string", () => {
        let stateInitial = {
            result: "",
            input: "5x"
        };
        let input = "x";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Digit Pressed: 0 at the start of the string, once", () => {
        let stateInitial = {
            result: "",
            input: ""
        };
        let input = "0";
        let stateExpected = {
            result: "0",
            input: "0"
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Digit Pressed: 0 at the start of the string, twice", () => {
        let stateInitial = {
            result: "",
            input: "0"
        };
        let input = "0";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Digit Pressed: 0 after a valid digit", () => {
        let stateInitial = {
            result: "",
            input: "1"
        };
        let input = "0";
        let stateExpected = {
            result: "",
            input: "10"
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Digit Pressed: 0 after a valid operation", () => {
        let stateInitial = {
            result: "",
            input: "1+"
        };
        let input = "0";
        let stateExpected = {
            result: "",
            input: "1+0"
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Digit Pressed: 0 after a valid decimal", () => {
        let stateInitial = {
            result: "",
            input: "3."
        };
        let input = "0";
        let stateExpected = {
            result: "",
            input: "3.0"
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Dot Pressed: empty string", () => {
        let stateInitial = {
            result: "",
            input: ""
        };
        let input = ".";
        let stateExpected = {
            result: "",
            input: "0."
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Dot Pressed: Second decimal in string", () => {
        let stateInitial = {
            result: "",
            input: "2345321.4321432153214"
        };
        let input = ".";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Equals Pressed: string terminates with x", () => {
        let stateInitial = {
            result: "",
            input: "123x"
        };
        let input = "=";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Equals Pressed: string terminates with +", () => {
        let stateInitial = {
            result: "",
            input: "123+"
        };
        let input = "=";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Equals Pressed: string terminates with -", () => {
        let stateInitial = {
            result: "",
            input: "123-"
        };
        let input = "=";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Equals Pressed: string terminates with /", () => {
        let stateInitial = {
            result: "",
            input: "123/"
        };
        let input = "=";
        let stateExpected = stateInitial;

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Equals Pressed: result same as input", () => {
        let stateInitial = {
            result: "",
            input: "1+9"
        }

        let input = "=";
        let stateExpected = {
            result: "10",
            input: ""
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Equals pressed: building on preexisting result", () => {
        let stateInitial = {
            result: "10",
            input: "+4"
        }

        let input = "=";
        let stateExpected = {
            result: "14",
            input: "14"
        }

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });

    it("Clear Pressed", () => {
        let stateInitial = {
            result: "103",
            input: "+4"
        };
        let input="AC";
        let stateExpected = {
            result: "",
            input: ""
        };

        let stateActual = determineNextState(stateInitial, input);
        expect(stateActual).to.deep.equal(stateExpected);
    });
});