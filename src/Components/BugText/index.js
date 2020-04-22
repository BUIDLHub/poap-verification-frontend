import React from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

const BugText = () => {
  return (
    <Row className={cn(align.full, align.noMarginPad, align.vCenter, "mt-5")}>
      <p className={cn("bug-text")}>
        Are you confused or did you encounter a bug?
      </p>
      <p className={cn("bug-text")}>
        <a href="mailto:support@buidlhub.com" target="_blank" alt="email_support">
          Let us know!
        </a>
      </p>
    </Row>
  );
};

export default BugText;
