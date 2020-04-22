import cn from 'classnames';
import * as align from 'Constants/alignments';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import {Icon} from 'Components/icons';

const DEFAULT_TITLE = "POAP Chat Verification";
const DEFAULT_SUB = "Use POAP badges to verify access to private chat channels";
class Header extends Component {
    render() {
        const {
            title,
            subtitle,
            titleOnly
        } = this.props;
        

        let titleClass = titleOnly?"header-container":"";
        return (
            <div className={cn("header-container", align.full, "px-3",  align.topCenter, align.noMarginPad)}>
                
                <Row className={cn(titleClass, align.full, align.noMarginPad, align.allCenter)}>
                    <Col xs="12" className={cn(align.allCenter,align.noMarginPad)}>
                        <span className={cn('font-weight-bold', 'text-3')}>
                            {title || DEFAULT_TITLE}
                        </span>
                    </Col>
                </Row>
                {
                    !titleOnly &&
                    <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <span className={cn('font-weight-light', 'text-1-3')}>
                                {subtitle || DEFAULT_SUB}
                            </span>
                        </Col>
                    </Row>
                }
                {
                    !titleOnly &&
                    <Row className={cn(align.full, "pt-3", align.noMarginPad, align.allCenter)}>
                        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
                            <span className={cn('font-weight-light', 'text-1', "pr-2")}>
                                Need to claim a POAP Badge?
                            </span>
                            <a href="https://poap.xyz" target="_blank">
                                <Icon className={cn("fa-external-link-alt", "clickable", "text-light")} />
                            </a>
                        </Col>
                    </Row>
                }
            </div>
        );
    }
}

export default Header;

