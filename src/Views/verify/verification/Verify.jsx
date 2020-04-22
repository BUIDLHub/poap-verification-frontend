import cn from 'classnames';
import *  as align from 'Constants/alignments';
import { Row, Col, Button } from 'reactstrap';
import StepWizard from 'react-step-wizard';
import React, { Component } from 'react';
import Loading from 'Components/Loading';
import {Icon} from 'Components/icons';

const transitions = {
    enterRight: 'animated bounceInRight',
    enterLeft: 'animated bounceInLeft',
    exitRight : 'animated bounceOutRight',
    exitLeft: 'animated bounceOutLeft'
}

export default class SliderVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            waiting: false
        };

        this.wizardRef = React.createRef();
    }

    flip = () => {
        let zero = !this.state.flipped;
        console.log("Flipping");

        this.setState({
            flipped: !this.state.flipped
        }, () => {
            if(zero) {
                //means we were originally on first page, go to next
                this.wizardRef.current.nextStep();
            } else {
                this.wizardRef.current.previousStep();
            }
        });
    }

    render() {
        
        const {
            className
        } = this.props;

        return (
            <div className={cn(className, align.full, align.allCenter, align.noMarginPad)}>
               <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                   <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                        <StepWizard ref={this.wizardRef}
                            className={cn("wizard-container", "verify-card", "p-3", align.full)}
                            transitions={transitions}>
                            
                            <ReqPage {...this.props} onComplete={this.flip}/>

                            <Success />
                            
                        </StepWizard>
                   </Col>
               </Row>
               
            </div>
        );
    }
}

class ReqPage extends Component {
    verify = async () => {
        try {
            let r = await this.props.doVerify();
            if(r) {
                this.props.onComplete()
            }
        } catch (e) {  }
    }

    render() {
 
        const {
            loading,
            status,
            error
        } = this.props;

        return (
            <div className={cn("wizard-page", align.full, align.topCenter, align.noMarginPad)}>
                <Loading loading={loading} size="sm" status={status} />
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="9" className={cn(align.allCenter, align.noMarginPad)}>
                        <div className={cn(align.full, align.topCenter, "pr-3", align.noMarginPad)}>
                            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                    <span className={cn('font-weight-bold', 'text-1')}>
                                        Step 1 of 2
                                    </span>
                                </Col>
                            </Row>
                            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                    <span className={cn('font-weight-light', 'text-1-3')}>
                                        Badge Verification
                                    </span>
                                </Col>
                            </Row>
                            <Row className={cn(align.full,"pt-3", align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                    <span className={cn('font-weight-light', 'text-sz-sm')}>
                                        Verify your badge by signing a random character string with 
                                        your wallet. This will be used to make sure that you own 
                                        the badge being verified.
                                    </span>
                                </Col>
                            </Row>
                            {
                                error &&
                                <Row className={cn(align.full, "pt-3", align.noMarginPad, align.allCenter)}>
                                    <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                        <span className={cn('font-weight-bold', 'text-1-3', "text-danger")}>
                                            {error.message?error.message:error}
                                        </span>
                                    </Col>
                                </Row>
                            }
                        </div>
                    </Col>
                    <Col xs="3" className={cn(align.allCenter, align.noMarginPad)}>
                        <Button className={cn("verify-button", "px-5")} size="sm" 
                                    onClick={this.verify}>Verify</Button>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

class Success extends Component {
    render() {

        return (
            <div className={cn("wizard-page", align.full, align.allCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="2" className={cn(align.allCenter, align.noMarginPad)}>
                        <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
                            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                    <Icon className={cn("fa-check-circle", "text-4", "text-success")}/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs="10" className={cn(align.topLeft, "pl-4", align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1-3')}>
                            Success!
                        </span>
                        <span className={cn('font-weight-light', 'text-1',"pt-3")}>
                            Badge ownership verified! Follow instructions below to join 
                            the associated chat channel(s)
                        </span>
                    </Col>
                </Row>
               
                
            </div>
        )
    }
}

