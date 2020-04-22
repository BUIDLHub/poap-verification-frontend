import React from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
// import logo from 'Assets/images/full-logo-light-bg.svg'; <<<< Logo here
import { Row, Col, Button } from "reactstrap";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={cn(
          "footer_container",
          align.full,
          "pb-5",
          "pt-5",
          align.noMarginPad
        )}
      >
        <Row
          className={cn(
            "socialicons_container",
            align.full,
            align.topCenter,
            align.noMarginPad
          )}
        >
          {/* <Col md="4" className={cn(align.allCenter, align.noMarginPad)}>
            <img className={cn("footer_logo")} src={logo} alt="logo" />
          </Col> */}
          <Col
            md="4"
            className={cn(align.allCenter, "mt-2", "mb-3", align.noMarginPad)}
          >
            <span className={cn("footer_text", align.noMarginPad)}>
              made with &nbsp;
            </span>
            <i className={cn("fa fa-heart")} />
            <span className={cn("footer_text", align.noMarginPad)}>
              &nbsp; by &nbsp;
            </span>
            <a
              className={cn("footer_text")}
              style={{ textDecoration: "underline" }}
              href="https://tekhedz-md.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUIDLHub ©2020
            </a>
            {/* <img
              className={cn("ml-1")}
              src={th_logo}
              width="39"
              height="19"
              alt="logo"
            /> */}
          </Col>
        </Row>
      </div>
    );
  }
}
