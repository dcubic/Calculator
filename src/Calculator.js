import React from "react";
import "./styles.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { determineNextState } from "./StateModifier.js";

export class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: "",
            input: ""
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        // console.log(event.target.value);
        // console.log();
        let inputValue = event.target.value;
        let stateNext = determineNextState(this.state, inputValue);
        this.setState(stateNext);
    }

    render() {
        return (
            <Container fluid style={{ backgroundColor: "black" }}>
                <Form>
                    <Form.Group controlId="display">
                        <Container fluid style={{ "padding": "0px" }}>
                            <textarea id="equation-display" className="text-area pecan-font-color" readOnly={true} placeholder="0">
                                
                            </textarea>
                            <textarea id="input-display" className="text-area" readOnly={true}>
                                
                            </textarea>
                        </Container>
                    </Form.Group>
                </Form>
                <Row noGutters="true">
                    <Col xs={9}>
                        <Button id="clear" className="no-transition" variant="danger" value="AC" onClick={this.handleButtonClick}>
                            AC
                        </Button>
                    </Col>
                    <Col>
                        <Button id="multiply" className="no-transition" variant="secondary" value="x" onClick={this.handleButtonClick}>
                            x
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button id="seven" className="no-transition" variant="light" value="7" onClick={this.handleButtonClick}>
                            7
                        </Button>
                    </Col>
                    <Col>
                        <Button id="eight" className="no-transition" variant="light" value="8" onClick={this.handleButtonClick}>
                            8
                        </Button>
                    </Col>
                    <Col>
                        <Button id="nine" className="no-transition" variant="light" value="9" onClick={this.handleButtonClick}>
                            9
                        </Button>
                    </Col>
                    <Col>
                        <Button id="divide" className="no-transition" variant="secondary" value="/" onClick={this.handleButtonClick}>
                            /
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button id="four" className="no-transition" variant="light" value="4" onClick={this.handleButtonClick}>
                            4
                        </Button>
                    </Col>
                    <Col>
                        <Button id="five" className="no-transition" variant="light" value="5" onClick={this.handleButtonClick}>
                            5
                        </Button>
                    </Col>
                    <Col>
                        <Button id="six" className="no-transition" variant="light" value="6" onClick={this.handleButtonClick}>
                            6
                        </Button>
                    </Col>
                    <Col>
                        <Button id="add" className="no-transition" variant="secondary" value="+" onClick={this.handleButtonClick}>
                            +
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button id="one" className="no-transition" variant="light" value="1" onClick={this.handleButtonClick}>
                            1
                        </Button>
                    </Col>
                    <Col>
                        <Button id="two" className="no-transition" variant="light" value="2" onClick={this.handleButtonClick}>
                            2
                        </Button>
                    </Col>
                    <Col>
                        <Button id="three" className="no-transition" variant="light" value="3" onClick={this.handleButtonClick}>
                            3
                        </Button>
                    </Col>
                    <Col>
                        <Button id="subtract" className="no-transition" variant="secondary" value="-" onClick={this.handleButtonClick}>
                            -
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button id="zero" className="no-transition" variant="light" value="0" onClick={this.handleButtonClick}>
                            0
                        </Button>
                    </Col>
                    <Col>
                        <Button id="decimal" className="no-transition" variant="light" value="." onClick={this.handleButtonClick}>
                            .
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Button id="equals" className="no-transition" variant="success" value="=" onClick={this.handleButtonClick}>
                            =
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}