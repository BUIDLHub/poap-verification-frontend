import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Icon } from "Components/icons";
import { Row, Col } from "reactstrap";
import _ from "lodash";

export default class Badges extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.needsInit) {
      setTimeout(() => {
        props.runInit();
      }, 1);
    }
    return {};
  }

  state = {};

  render() {
    const { loading, eventsByToken, goToBadge, account } = this.props;
    let tokenIDs = _.keys(eventsByToken);

    return (
      <div
        className={cn(align.full, align.topCenter, "py-2", align.noMarginPad)}
      >
        {loading &&
          <Row className={cn(align.full, "pt-4", align.noMarginPad, align.allCenter)} >
          
            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            
                <div
                  className={cn(align.full, align.allCenter, align.noMarginPad)}
                >
                  <Icon className={cn("fa-spinner fa-spin")} />
                  <span className={cn("font-weight-light", "text-1", "pl-2")}>
                    loading badges...
                  </span>
                </div>
              </Col>
            </Row>
        }
        {
              !loading && tokenIDs.length === 0 &&
          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col xs="12" className={cn(align.topCenter, align.noMarginPad)}>
              <span className={cn('font-weight-light', 'text-1')}>
                No badges found for selected wallet:
              </span>
              <span className={cn('font-weight-bold', 'text-1')}>
                  {account}
              </span>
            </Col>
          </Row>
        }
            
        { !loading &&  
          <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
            {
              badgeRows(tokenIDs, eventsByToken, goToBadge)
            }
          </div>
        }

      </div>
    );
  }
}

const badgeRows = (tokenIDs, eventsByToken, goToBadge) => {

  let rows = [];
  //for every set of 4 items, we break into another row
  for(let i=0;i<tokenIDs.length;i+=4) {
    let subs = tokenIDs.slice(i, i+4);
    let row = buildBadgeRow(i, subs, eventsByToken, goToBadge);
    rows.push(row);
  }
  return rows;
}

const buildBadgeRow = (key, ids, eventsByToken, goToBadge) => {
  return (
    <div key={key} className={cn(align.full, align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            
      {
        ids.map((id, i)=> {
          let evt = eventsByToken[id];
          return (
              <Col key={'col' + i} xs="3" className={cn(align.leftCenter, align.noMarginPad)}>  
                <EventBadge
                  {...evt}
                  goToBadge={() => {
                    goToBadge(evt, id);
                  }}
                  key={i}
                />
              </Col>
          )
        })
      }

      </Row>
    </div>
  )
}

const EventBadge = (props) => {
  return (
    <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          
          <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
            <div
              className={cn(align.allCenter, align.noMarginPad, "clickable")}
              onClick={props.goToBadge}
            >
              <img
                src={props.image_url}
                className={cn("badges-img", "hover-effect")}
                alt="badge"
              />
            </div>
            <p className={cn("badge-name", "mt-1")}>Badge Name</p>
          </div>
      </Col>
    </Row>
    </div>
  );
};
