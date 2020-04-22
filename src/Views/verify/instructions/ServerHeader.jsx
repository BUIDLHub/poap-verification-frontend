import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col,Button } from 'reactstrap';
import React, { Component } from 'react';
import discord from 'Assets/images/hexicon-discord.png';

class ServerHeader extends Component {
    render() {
        const {
            serverName,
            roles,
            showButton,
            buttonTitle,
            onClick
        } = this.props;

        let sName = serverName?serverName:"Server Name";
        let icon = serverName?(
            <img src={discord} width="50" alg="discord" />
        ):null;

        let rolCol = roles?(
                <div className={cn(align.full, align.topLeft, align.noMarginPad)}>
                    {
                        roles.map((r,i)=>{
                            if(r.name) {
                                r = r.name;
                            }
                            return (
                                <span key={i} className={cn('font-weight-bold', 'text-1')}>
                                    {r}
                                </span>
                            )
                        })
                    }
                </div>
            ):(
                <span className={cn('font-weight-bold', 'text-1')}>
                    Roles
                </span>
            );

        return (
            <div className={cn(align.full, "pt-4", "pb-2", align.leftCenter, align.noMarginPad)}>
                <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                    {
                        icon &&
                        <Col xs="1" className={cn(align.leftCenter, align.noMarginPad)}>
                            {icon}
                        </Col>
                    }
                    <Col xs={serverName?7:8} className={cn(align.leftLeft, align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-1')}>
                            {sName}
                        </span>
                    </Col>
                    <Col xs="3" className={cn(align.topLeft, align.noMarginPad)}>
                        {rolCol}
                    </Col>
                    <Col xs="1" className={cn(align.allCenter, align.noMarginPad)}>
                        {
                            showButton &&
                            <Button className={cn("verify-button")} size="sm" onClick={onClick}>
                                {buttonTitle || "View"}
                            </Button>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ServerHeader;

