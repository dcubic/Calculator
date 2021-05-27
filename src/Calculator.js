import React from "react";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export class Calculator extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row noGutters="true">
                    <Col xs = {9}>
                        <Button className="no-transition" variant="danger">
                            AC
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="secondary">
                            X
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button className="no-transition" variant="light">
                            7
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            8
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            9
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="secondary">
                            /
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button className="no-transition" variant="light">
                            4
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            5
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            6
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="secondary">
                            +
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button className="no-transition" variant="light">
                            1
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            2
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            3
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="secondary">
                            -
                        </Button>
                    </Col>
                </Row>
                <Row noGutters="true">
                    <Col>
                        <Button className="no-transition" variant="light">
                            0
                        </Button>
                    </Col>
                    <Col>
                        <Button className="no-transition" variant="light">
                            .
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Button className="no-transition" variant="success">
                            =
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}