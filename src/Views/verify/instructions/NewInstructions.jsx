import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import ServerHeader from './ServerHeader';
import ServerRow from './ServerRow';

class NewInstructions extends Component {
    render() {
        const {
            inviteLinks,
            className
        }  = this.props;

        if(!inviteLinks || inviteLinks.length === 0) {
            return null;
        }

        return (
            <div className={cn(className, "instruction-card", "px-3", align.full, align.topCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1')}>
                            Step 2 of 2
                        </span>
                    </Col>
                </Row>

                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-light', 'text-1-3')}>
                            Join Chat Server
                        </span>
                    </Col>
                </Row>

                <Row className={cn(align.full, "py-2", align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                        <span className={cn('font-weight-light', 'text-1')}>
                            Choose available servers to join
                        </span>
                    </Col>
                </Row>

                <ServerHeader />
                <div className={cn("server-container", align.full, align.topCenter, align.noMarginPad)}>
                    {
                        inviteLinks.map((il, i)=>{
                            return (
                                <ServerRow {...this.props} linkInfo={il} key={i} />
                            )
                        })
                    }
                </div>
                

            </div>
        );
    }
}

export default NewInstructions;
