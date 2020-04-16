import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Button } from "reactstrap";
import React from "react";

const Divider = () => {
  return (
    <React.Fragment>
      <div
        className={cn(
          align.full,
          align.allCenter,
          align.noMarginPad,
          "table-divider"
        )}
      />
    </React.Fragment>
  );
};

export default Divider;
