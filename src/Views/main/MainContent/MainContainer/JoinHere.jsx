import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

import Button from "Components/Buttons/JoinHere";

export default class JoinHere extends React.Component {
  render() {
    return (
      <Col xs="12" className={cn("py-2", "px-2")}>
        <div
          className={cn(
            align.full,
            align.vCenter,
            "join-here-discord",
            "py-1",
            "px-1"
          )}
        >
          <Col xs="12" className={cn(align.topCenter, align.noMarginPad)}>
            <p className={cn("server-join-name")}>
              Official Devcon 2020 Channel
            </p>
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Button>Join Here</Button>
          </Col>
        </div>
      </Col>
    );
  }
}
