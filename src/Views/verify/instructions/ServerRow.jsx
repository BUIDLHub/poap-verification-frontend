import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col, Collapse, Button } from 'reactstrap';
import React, { Component } from 'react';
import Header from './ServerHeader';
import {Icon} from 'Components/icons';

class ServerRow extends Component {
    state = {
        expanded: false
    }

    toggle = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const {
            linkInfo
        } = this.props;
        if(!linkInfo) {
            return null; 
        }

        const {
            inviteLink,
            authCommand,
            roles,
            guildName,
            botName
        } = linkInfo;

        let open = this.state.expanded;

        return (
            <div className={cn(align.full, "py-2", "border-top", "border-muted", align.topCenter, align.noMarginPad)}>
                <Header serverName={guildName} 
                        roles={roles} 
                        showButton 
                        buttonTitle={open?"Hide":"View"}
                        onClick={this.toggle}/>
                
                <Collapse className={cn(align.full, "px-3", "pt-3")} isOpen={open}>
                    <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
                        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                            <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                <span className={cn('font-weight-light', 'text-1-3')}>
                                    Gain Access Roles
                                </span>
                            </Col>
                        </Row>

                        <Row className={cn(align.full, "py-2", align.noMarginPad, align.allCenter)}>
                            <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                <span className={cn('font-weight-light', 'text-1')}>
                                    Copy the following command and send a direct message to &nbsp; 
                                    <em>'{botName}'</em>, a BUIDLHub bot member of the server.
                                </span>
                            </Col>
                        </Row>

                        <Row className={cn("auth-command", align.full, align.noMarginPad, align.allCenter)}>
                            <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                <span className={cn('font-weight-bold', 'text-1', "pr-2")}>
                                    {authCommand}
                                </span>
                                <Icon className={cn("fa-copy", "text-1", "clickable")}
                                    onClick={()=>this.props.copyToClipboard(authCommand)} />
                            </Col>
                        </Row>

                        <Row className={cn(align.full, "pt-3", align.noMarginPad, align.allCenter)}>
                            <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
                                <a className={cn("verify-button",  "px-4")} href={inviteLink} target="_blank">
                                    Join</a>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ServerRow;
