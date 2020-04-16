import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

export default class TableTitles extends React.Component {
  render() {
    return (
      <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
        <div
          className={cn(align.full, align.allCenter, "mt-1", "mb-0", "pb-0")}
        >
          <Col xs="2" className={cn(align.leftCenter, align.noMarginPad)}>
            <p className={cn("table-titles")}>Badge</p>
          </Col>
          <Col xs="4" className={cn(align.leftCenter, align.noMarginPad)}>
            <p className={cn("table-titles")}>Server</p>
          </Col>
          <Col xs="4" className={cn(align.leftCenter, align.noMarginPad)}>
            <p className={cn("table-titles")}>Roles</p>
          </Col>
        </div>
      </Col>
    );
  }
}
