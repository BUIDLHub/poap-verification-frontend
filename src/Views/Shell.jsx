import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import BUIDLHub from "Components/BUIDLHub";

import poapLogo from 'Assets/images/POAPLogo.svg';
import BugText from "Components/BugText";

import { ToastContainer } from "react-toastify";

export default class Main extends Component {
  render() {
    
    return (
      <div
        className={cn(
          "main-landing",
          align.full,
          align.topLeft,
          align.noMarginPad
        )}
      >
        <ToastContainer />
        <Row className={cn("d-flex", "flex-row", "justify-items-start", "align-items-start", align.full, align.noMarginPad)}>
          <Col xs="2" className={cn("header-container", align.topLeft, align.noMarginPad)}>
              <div className={cn("clickable", "p-4", align.allCenter, align.noMarginPad)}
                  onClick={e=>{
                    e.stopPropagation();
                    e.preventDefault();
                    if(this.props.history) {
                      this.props.history.push("/");
                    }
                  }}>
                  <img src={poapLogo} width="150" alt="logo" />
              </div>
          </Col>
          <Col xs="8" className={cn(align.topLeft,  align.noMarginPad)}>
            <div className={cn(align.full, align.topLeft, align.noMarginPad)}>
              
              <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                <Col xs="12" className={cn(align.topLeft, align.noMarginPad)}>
                  {this.props.children}
                </Col>
              </Row>

              <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                  <BugText />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="2" className={cn(align.topLeft, align.noMarginPad)}>
            <div className={cn(align.full, align.topLeft, align.noMarginPad)}>
              <Row className={cn(align.full, align.noMarginPad, align.topLeft)}>
                <Col xs="12" className={cn("header-container", align.allCenter, align.noMarginPad)}>
                  &nbsp;
                </Col>
              </Row>
              <Row className={cn(align.full, align.noMarginPad, align.topLeft)}>
                <Col xs="12" className={cn(align.rightCenter, align.noMarginPad)}>
                  <BUIDLHub {...this.props} />
                </Col>
              </Row>
            </div>
            
          </Col>
        </Row>
        
        
         
      </div>
    );
  }
}
