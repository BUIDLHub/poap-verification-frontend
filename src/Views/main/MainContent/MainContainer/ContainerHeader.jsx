import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

export default class ContainerHeader extends React.Component {
  render() {
    return (
      <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
        <Col xs="4" className={cn(align.justCenter, align.noMarginPad)}>
          <p>
            <span>Img</span> Discord <span>Notification</span>
          </p>
        </Col>
      </Col>
    );
  }
}
