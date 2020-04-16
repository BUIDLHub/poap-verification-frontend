import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

const Status = () => {
  return (
    <Row className={cn(align.full, align.noMarginPad)}>
      <Col xs="6" className={cn(align.noMarginPad)}>
        <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
          <p className={cn("attendance")}>Attendance Confirmed!</p>
        </div>
        <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
          <p className={cn("access", "external-link")}>
            Access tokens granted <span className={cn("fa fa-external-link")} />
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Status;
