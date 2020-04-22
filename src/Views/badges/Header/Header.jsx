import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import { Icon } from "Components/icons";

class Header extends Component {
  render() {
    return (
      <div
        className={cn(
          "header-container",
          align.full,
          "px-3",
          align.topCenter,
          align.noMarginPad
        )}
      >
        <Row className={cn(align.full, align.noMarginPad, align.topCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <span className={cn("header-title")}>Verify your Badge</span>
          </Col>
        </Row>

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <span className={cn("font-weight-light", "text-1-3")}>
              Use POAP badges to access private chat channels
            </span>
          </Col>
        </Row>

        <Row
          className={cn(align.full, "pt-3", align.noMarginPad, align.allCenter)}
        >
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <span className={cn("font-weight-light", "text-1", "pr-2")}>
              Need to claim a POAP Badge?
            </span>
            <a href="https://poap.xyz" target="_blank">
              <Icon
                className={cn(
                  "fa-external-link-alt",
                  "clickable",
                  "text-light"
                )}
              />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
