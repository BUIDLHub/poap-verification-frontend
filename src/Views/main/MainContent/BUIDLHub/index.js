import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

export default class BUIDLHub extends React.Component {
  render() {
    return (
      <Col xs="2" className={cn("col-xs-push-12")}>
        <p>BUIDLHub</p>
      </Col>
    );
  }
}
