import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class Error404 extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
      <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              <Col xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">
                      Something went wrong...
                    </CardTitle>

                    <p className="display-1 font-weight-bold mb-5">404</p>
                    <Button
                      href="/"
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                    >
                      Go Home
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
export default Error404;
