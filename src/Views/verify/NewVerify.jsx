import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import Shell from '../Shell';
import Header from '../Header';
import Verification from './verification';
import Instructions from './instructions';

class NewVerify extends Component {
    render() {
        const {
            event,
            tokenID,
            inviteLinks
        } = this.props;
        

        return (
            <Shell history={this.props.history}>
                    <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <Header title={event?event.name:"Loading..."} titleOnly />
                        </Col>
                    </Row>
                    <div className={cn("center-content", align.full, "pb-5", align.topCenter, align.noMarginPad)}>
                        
                        <Row className={cn(align.full, "pt-3", align.noMarginPad, align.allCenter)}>
                            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                <span className={cn('font-weight-light', 'text-1-2', "text-muted")}>
                                    Verify Badge for Chat Access
                                </span>
                            </Col>
                        </Row>

                        <Row className={cn(align.full, "pt-5", align.noMarginPad, align.allCenter)}>
                            <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                                <Verification event={event} tokenID={tokenID}  />
                            </Col>
                        </Row>
                        
                        <Row className={cn(align.full, "pt-5", align.noMarginPad, align.allCenter)}>
                            <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
                                <Instructions />
                            </Col>
                        </Row>
                        
                    </div>
                    
                    
            </Shell>
        );
    }
}

export default NewVerify;
