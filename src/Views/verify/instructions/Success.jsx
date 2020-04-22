import cn from "classnames";
import * as align from "Constants/alignments";
import { Icon } from "Components/icons";
import { Row, Col, Card, CardBody } from "reactstrap";
import React, { Component } from "react";

class Success extends Component {
  render() {
    const { className, inviteLink, authCommand } = this.props;

    if (!inviteLink) {
      return null;
    }

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
        <Card className={cn("slight-shadow", className)}>
          <CardBody
            className={cn(
              align.full,
              align.topCenter,
              "py-4",
              "px-3",
              align.noMarginPad
            )}
          >
            <Row
              className={cn(
                align.full,
                "border-bottom",
                "border-muted",
                "py-4",
                align.noMarginPad,
                align.allCenter
              )}
            >
              <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                <Icon
                  className={cn("fa-check-circle", "text-success", "text-4")}
                />
                <span className={cn("font-weight-bold", "text-1", "pl-3")}>
                  Access Accepted!
                </span>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Success;
