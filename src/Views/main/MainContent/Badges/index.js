import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

export default class Badges extends React.Component {
  render() {
    return (
      <Col xs="2" className={cn("col-xs")}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col
            xs="12"
            className={cn(align.leftCenter, align.noMarginPad, "yourbadges")}
          >
            <p className={cn("yourbadges", "ml-5")}>Your badges:</p>
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
              <p className={cn("ml-5")}>Badges list here...</p>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
