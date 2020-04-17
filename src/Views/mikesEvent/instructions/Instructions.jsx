import cn from 'classnames';
import * as align from 'Constants/alignments';
import {Icon} from 'Components/icons';
import { 
    Row, 
    Col, 
    Card,
    CardBody
} from 'reactstrap';
import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        const { 
            className,
            inviteLink,
            authCommand
         } = this.props;

        if(!inviteLink) {
            return null;
        }

        return (
            <div className={cn(align.full, "px-3", "py-3", align.allCenter, align.noMarginPad)}>
                
            <Card className={cn("slight-shadow",  className)}>
                <CardBody className={cn(align.full, align.topCenter, "py-4", "px-3", align.noMarginPad)}>
                    
                    <Row className={cn(align.full, "border-bottom", "border-muted", "py-4", align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <Icon className={cn("fa-check-circle", "text-success", "text-4")} />
                            <span className={cn('font-weight-bold', 'text-1', "pl-3")}>
                                Access Accepted!
                            </span>
                        </Col>
                    </Row>

                    <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                            <span className={cn('font-weight-bold', 'text-1')}>
                                Next Steps:
                            </span>
                        </Col>
                    </Row>

                    <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                                <Bullet>
                                    <span className={cn('font-weight-light', 'text-1')}>
                                        Join the Discord server using the button below
                                    </span>
                                </Bullet>
                                <Bullet>
                                    <span className={cn('font-weight-light', 'text-1')}>
                                        Find the BUIDLHub bot in the members list
                                    </span>
                                </Bullet>
                                <Bullet>
                                    <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                                        <span className={cn('font-weight-light', 'text-1')}>
                                            Send a direct message (DM) to the bot with the following contents:
                                        </span>
                                        <div className={cn(align.full, align.leftCenter, align.noMarginPad)}>
                                            <span className={cn('font-weight-bold', 'text-1', "pr-2")}>
                                                {authCommand}
                                            </span>
                                            <Icon className={cn("fa-copy", "text-1", "clickable")}
                                                onClick={()=>this.props.copyToClipboard(authCommand)} />
                                        </div>
                                    </div>
                                </Bullet>
                            </div>
                        </Col>
                    </Row>

                    <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            
                        </Col>
                    </Row>

                    <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <a className={cn("text-2", "text-success", "font-weight-bold")} 
                                    href={inviteLink} target="_blank">
                                        Join Server!
                            </a>
                        </Col>
                    </Row>

                </CardBody>
            </Card>
            </div>
        );
    }
}

const Bullet = props => {
    return (
        <div className={cn(align.full, "py-2", align.allCenter, align.noMarginPad)}>
            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                <Col xs="1" className={cn(align.topLeft, align.noMarginPad)}>
                    <Icon className={cn("fa-circle", "text-sz-sm")} />
                </Col>
                <Col xs="11" className={cn(align.leftCenter, align.noMarginPad)}>
                    {props.children}
                </Col>
            </Row>
        </div>
    )
}

export default Instructions;
