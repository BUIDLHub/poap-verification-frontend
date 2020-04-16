import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ContainerHeader extends React.Component {
  render() {
    return (
      <Col
        xs="12"
        className={cn(align.vCenter, align.noMarginPad, "container-header-bg")}
      >
        <Col xs="6" className={cn(align.vCenter, align.noMarginPad)}>
          <p className={cn("container-header-text")}>
            {/* <span className={cn("fab fa-discord")} /> Discord */}
            <span>
              <FontAwesomeIcon icon={faDiscord} />
            </span>{" "}
            Discord
          </p>
        </Col>
      </Col>
    );
  }
}
