import cn from 'classnames';
import * as  align from 'Constants/alignments';
import { 
    Row, 
    Col, 
    Card,
    CardBody,
    Button 
} from 'reactstrap';
import React, { Component } from 'react';
import Loading from 'Components/Loading';

class Verify extends Component {
    render() {
        const {
            className,
            loading,
            status,
            error
        } = this.props;

        return (
            
            <div className={cn(align.full, "px-3", "py-3", align.allCenter, align.noMarginPad)}>
                
                <Card className={cn("slight-shadow",  className)}>
                    <CardBody className={cn(align.full, align.topCenter, "py-4", "px-3", align.noMarginPad)}>
                        <Loading loading={loading} size="small" status={status} />
                        <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                                    <span className={cn('font-weight-bold', 'text-1')}>
                                        Badge Verification
                                    </span>
                                </Col>
                            </Row>

                            <Row className={cn(align.full, "py-3", align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                    <span className={cn('font-weight-light', 'text-1')}>
                                        First, we will verify that you own the badge. 
                                        We do this by asking you to sign a random value with your wallet.
                                    </span>
                                </Col>
                            </Row>
                            { 
                                error &&
                                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                    <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                        <span className={cn('font-weight-bold', 'text-1', "text-danger")}>
                                            Error: {error.message?error.message:error}
                                        </span>
                                    </Col>
                                </Row>
                            }
                            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                                <Col xs="12" className={cn(align.rightCenter, align.noMarginPad)}>
                                    <Button size="sm" color="primary" onClick={this.props.doVerify}>Verify Badge</Button>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
                
            </div>
        );
    }
}

export default Verify;
