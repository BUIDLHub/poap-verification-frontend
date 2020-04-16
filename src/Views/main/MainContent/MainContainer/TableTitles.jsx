import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

export default class TableTitles extends React.Component {
  render() {
    return (
      <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
        <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
          <p>Server</p>
        </Col>
        <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
          <p> Roles</p>
        </Col>
      </Col>
    );
  }
}
