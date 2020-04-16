import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

const EventTitle = () => {
  return (
    <Row className={cn(align.full, align.noMarginPad)}>
      <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
        <div
          className={cn(align.full, align.allCenter, align.noMarginPad, "mt-3")}
        >
          <Button>Event Title</Button>
        </div>
      </Col>
    </Row>
  );
};

export default EventTitle;
