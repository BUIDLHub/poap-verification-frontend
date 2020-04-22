import cn from "classnames";
import * as align from "Constants/alignments";
import { Icon } from "Components/icons";
import { Row, Col, Card, CardBody } from "reactstrap";
import React, { Component } from "react";

const Bullet = (props) => {
  return (
    <div className={cn(align.full, "py-2", align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="1" className={cn(align.topLeft, align.noMarginPad)}>
          <Icon className={cn("fa-circle", "text-sz-sm")} />
        </Col>
        <Col xs="11" className={cn(align.leftCenter, align.noMarginPad)}>
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export default Bullet;
