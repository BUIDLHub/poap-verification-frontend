import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import Verify from './verification';

const viewMap = {
    "verifyToken": Verify
}

class MikeEvent extends Component {
    render() {
        const {
            steps
        } = this.props;

        return (
            <div className={cn(align.full, "py-4", align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, "py-3", "border-bottom", "border-muted", align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1')}>
                            Verification Process
                        </span>
                    </Col>
                </Row>

                <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.topCenter, align.noMarginPad)}>
                        {
                            steps.map((s, i) => {
                                let V = viewMap[s.id];
                                if(V) {
                                    return <V key={i} step={s} />
                                }

                                return (
                                    <div key={i} className={cn(align.full, align.allCenter, align.noMarginPad)}>
                                        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                                <span className={cn('font-weight-light', 'text-1')}>
                                                    Step: {i+1}
                                                </span>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MikeEvent;
