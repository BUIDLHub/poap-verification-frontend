import cn from "classnames";
import * as align from "Constants/alignments";
import { Icon } from "Components/icons";
import { Row, Col, Card, CardBody, Collapse, Button } from "reactstrap";
import React, { Component, useState } from "react";

import Bullet from "Components/Bullet";

// IIII Need to put the invite link ahref here
class Join extends Component {
  render() {
    const { className, inviteLink, authCommand } = this.props;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    if (!inviteLink) {
      return null;
    }

    return (
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
            <Col xs="12" className={cn(align.topLeft, align.noMarginPad)}>
              <p>Step 2 of 2</p>
            </Col>
            <Col xs="12" className={cn(align.topLeft, align.noMarginPad)}>
              <span className={cn("font-weight-bold", "text-1")}>
                Join Server
              </span>
            </Col>
            <Col xs="12" className={cn(align.topLeft, align.noMarginPad)}>
              <p>Choose the servers you want to join.</p>
            </Col>

            {/* IIII Here needs to be the List component */}

            {/* IIII For each needs to render the following */}

            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              See more instructions.
            </Button>
            <Collapse isOpen={isOpen}>
              <Bullet>
                <span className={cn("font-weight-light", "text-1")}>
                  Join the Discord server using the button below
                </span>
              </Bullet>
              <Bullet>
                <span className={cn("font-weight-light", "text-1")}>
                  Find the BUIDLHub bot in the members list
                </span>
              </Bullet>
              <Bullet>
                <div
                  className={cn(align.full, align.topCenter, align.noMarginPad)}
                >
                  <span className={cn("font-weight-light", "text-1")}>
                    Send a direct message (DM) to the bot with the following
                    contents:
                  </span>
                  <div
                    className={cn(
                      align.full,
                      align.leftCenter,
                      align.noMarginPad
                    )}
                  >
                    <span className={cn("font-weight-bold", "text-1", "pr-2")}>
                      {authCommand}
                    </span>
                    <Icon
                      className={cn("fa-copy", "text-1", "clickable")}
                      onClick={() => this.props.copyToClipboard(authCommand)}
                    />
                  </div>
                </div>
              </Bullet>
            </Collapse>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Join;
