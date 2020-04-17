import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

export default class Verify extends React.Component {
  render() {
    return (
      <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
      <Col xs="2" className={cn(align.allCenter, align.noMarginPad)} />
      <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>Steps</Col>
      <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>Help Text</Col>
      <Col xs="2" className={cn(align.allCenter, align.noMarginPad)} />
      </Row>
      </Col>
    );
  }
}
