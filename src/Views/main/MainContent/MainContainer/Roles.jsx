import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

import Button from "Components/Buttons/Roles";

export default class Roles extends React.Component {
  render() {
    return (
      <Col xs="12" className={cn("py-2", "px-2")}>
        <div className={cn(align.full, align.vCenter, "py-1", "px-1")}>
          <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
            <Button>VIP</Button>
          </Col>
          <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
            <Button>Hacker</Button>
          </Col>
        </div>
      </Col>
    );
  }
}
