// import { connect } from "react-redux";
// import Navbar from "./Navbar";
// import { withRouter } from "react-router-dom";
// import { default as acctOps } from "Redux/account/operations";

// const s2p = (state) => {
//   return {
//     //
//   };
// };

// const d2p = (dispatch, own) => {
//   return {
//     goToEventFlow: () => {
//       own.history.push("/eventflow/app");
//     },
//     doLogin: async (user) => {
//       if (user && user.role === 0) {
//         //user is requesting to login so we clear the guest account and force login
//         await dispatch(acctOps.logout());
//       }
//       own.history.push("/eventflow/app");
//     },
//     goHome: () => {
//       own.history.push("/eventflow");
//     },
//   };
// };

// export default withRouter(connect(s2p, d2p)(Navbar));
