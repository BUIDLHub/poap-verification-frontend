import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import Verify from './verification';
import Instructions from './instructions';

export default class VerifyEvent extends Component {
    render() {
        const {
            event,
            tokenID,
            inviteLink
        } = this.props;
        if(!event) {
            return null;
        }

        let verifyInOut = inviteLink?"fadeOutDown":"bounceInUp";
        let instrInOut = inviteLink?"bounceInDown":null;

        return (
            <div className={cn(align.full, "py-4", align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-light', 'text-1')}>
                            Event Name:
                        </span>
                        <span className={cn('font-weight-bold', 'text-1', "pl-2")}>
                            {event.name}
                        </span>
                    </Col>
                </Row>
                <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.topCenter, align.noMarginPad)}>
                        <Verify eventID={event.id} tokenID={tokenID} className={cn("animated", verifyInOut)} />
                    </Col>
                </Row>

                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                        <Instructions {...this.props} className={cn("animated", instrInOut)} />
                    </Col>
                </Row>
            </div>
        );
    }
}