import cn from 'classnames';
import * as  align from 'Constants/alignments';
import { Row, Col, Button } from 'reactstrap';
import React, { Component } from 'react';
import Loading from 'Components/Loading';
import {Icon} from 'Components/icons';

class Verify extends Component {
    render() {
        const {
            step
        } = this.props;

        return (
            
            <div className={cn(align.full, "px-3", "py-3", align.allCenter, align.noMarginPad)}>
                <Loading loading={step.working} size="small" status={step.status} />

                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="1" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1')}>
                            Step: {step.order+1}
                        </span>
                    </Col>
                    <Col xs="7" className={cn(align.allCenter, align.noMarginPad)}>
                        <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                    <span className={cn('font-weight-light', 'text-1')}>
                                        First, we will verify that you own the badge. 
                                        We do this by asking you to sign a random value with your wallet.
                                    </span>
                                </Col>
                            </Row>
                            {
                                step.error &&
                                <Row className={cn(align.full, "py-2", align.noMarginPad, align.allCenter)}>
                                    <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                        <span className={cn('font-weight-bold', 'text-1', "text-danger")}>
                                            Error: {step.error.message?step.error.message:step.error}
                                        </span>
                                    </Col>
                                </Row>
                            }
                        </div>
                    </Col>
                    
                    {
                        !step.completed &&
                        <Col xs="2" className={cn(align.rightCenter, align.noMarginPad)}>
                            <Button size="sm" color="primary" onClick={this.props.doVerify}>Verify Badge</Button>
                        </Col>
                    }
                    {
                        step.completed &&
                        <Col xs="2" className={cn(align.allCenter, align.noMarginPad)}>
                            <Icon className={cn("fa-check", "text-success", "text-bold", "text-2")} />
                        </Col>
                    }
                </Row>
            </div>
        );
    }
}

export default Verify;
