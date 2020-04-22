import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import { Icon } from "Components/icons";

class Header extends Component {
  render() {
    const { event, tokenID, inviteLink } = this.props;
    if (!event) {
      return null;
    }

    return (
      <div
        className={cn(
          "header-container",
          align.full,
          "px-3",
          align.vCenter,
          align.noMarginPad
        )}
      >
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col
            xs="12"
            className={cn(align.allCenter, align.noMarginPad, "mb-2")}
          >
            <span className={cn("font-weight-light", "text-1-3")}>
              Event Name:
            </span>
          </Col>
        </Row>

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <span className={cn("event-name-title")}>{event.name}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
