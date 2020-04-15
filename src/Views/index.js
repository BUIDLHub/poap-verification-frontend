import React, { Component } from "react";
import cn from "classnames";
// import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import * as align from "Constants/alignments";

// import Loading from "Components/Loading";

import Error from "Routes/error";
import Main from "Routes/main";

// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Main styles for this application

// import "scss/style.scss";
// import "react-toggle/style.css";
// import "animate.css/animate.min.css";

const DEF_START = "/";

class AppStart extends Component {
  render() {
    // const { location, match } = this.props;
    // if (location.pathname === "/") {
    //   return <Redirect to={DEF_START} />;
    // }
    /**
 *
              
 */

    return (
      <div
        className={cn(
          "main-view-container",
          align.topCenter,
          align.full,
          align.noMarginPad
        )}
      >
        
        <Switch>
          <Route path={`/`} component={Main} />

          <Route path={`/error`} component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}

// const s2p = (state) => {
//   return {
//     loading: state.init.loading,
//   };
// };

// const d2p = (dispatch) => {
//   return {};
// };

// export default withRouter(connect(s2p, d2p)(AppStart));
export default AppStart;
