import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import {Icon} from 'Components/icons';
import { Row, Col } from "reactstrap";

const Status = () => {
  return (
    <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
      
      <Row className={cn(align.full, align.leftCenter, align.noMarginPad)}>
        <Col xs="6" className={cn("py-3", align.allCenter, align.noMarginPad)}>
          <span className={cn('font-weight-light', 'text-1')}>
              Use POAP badges to verify access to private chat channels
          </span>
        </Col>
      </Row>
      <Row className={cn(align.full, align.noMarginPad, align.leftCenter)}>
        
        <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
            <span className={cn('font-weight-light', 'text-1', "pr-2")}>
              Need to claim a POAP Badge?
            </span>
            <a href="https://poap.xyz" target="_blank">
                <Icon className={cn("fa-external-link-alt", "clickable")} />
                
              </a>
          </Col>
          
      </Row>
    </div>
  );
};

export default Status;
