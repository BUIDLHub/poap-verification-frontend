import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return (
            <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        Main Content
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MainContent;


