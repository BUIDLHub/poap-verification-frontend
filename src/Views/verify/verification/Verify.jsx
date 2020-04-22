import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import React, { Component } from "react";
import Loading from "Components/Loading";

class Verify extends Component {
  render() {
    const { className, loading, status, error } = this.props;

    return (
      <div
        className={cn(
          align.full,
          "px-3",
          "py-3",
          align.allCenter,
          align.noMarginPad
        )}
      >
        <Card className={cn("slight-shadow", "rounded", className)}>
          <CardBody
            className={cn(
              align.full,
              align.topCenter,
              "py-4",
              "px-3",
              align.noMarginPad
            )}
          >
            <Loading loading={loading} size="small" status={status} />
            <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
              <Row
                className={cn(align.full, align.noMarginPad, align.allCenter)}
              >
                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                  <Row
                    className={cn(
                      align.full,
                      align.noMarginPad,
                      align.allCenter
                    )}
                  >
                    <Col
                      xs="9"
                      className={cn(align.topLeft, align.noMarginPad)}
                    >
                      <Col
                        xs="12"
                        className={cn(align.topLeft, align.noMarginPad)}
                      >
                        <p>Step 1 of 2</p>
                      </Col>
                      <Col
                        xs="12"
                        className={cn(align.topLeft, align.noMarginPad)}
                      >
                        <span className={cn("font-weight-bold", "text-1")}>
                          Badge Verification
                        </span>
                      </Col>
                      <Col
                        xs="12"
                        className={cn(align.topLeft, align.noMarginPad)}
                      >
                        <p>
                          Click the button to assign your wallet address a key
                          value.
                        </p>
                      </Col>
                    </Col>
                    <Col
                      xs="3"
                      className={cn(align.topCenter, align.noMarginPad)}
                    >
                      <Row
                        className={cn(
                          align.full,
                          align.noMarginPad,
                          align.rightCenter
                        )}
                      >
                        <Col
                          xs="12"
                          className={cn(align.topCenter, align.noMarginPad)}
                        >
                          {error && (
                            <span
                              className={cn(
                                "font-weight-bold",
                                "text-1",
                                "text-danger"
                              )}
                            >
                              Error: {error.message ? error.message : error}
                            </span>
                          )}
                          {!error && (
                            <Button
                              size="sm"
                              color="primary"
                              className={cn("rounded-0")}
                              onClick={this.props.doVerify}
                            >
                              Verify Badge
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Verify;
