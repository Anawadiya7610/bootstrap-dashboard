import AppRoot from "./approot.component";
import { connect } from "react-redux";

const mapStateToProps=state =>({
    isLoggedIn: state.userPage.isLoggedIn,
})

export const AppRootPageContainer = connect(mapStateToProps,{})(AppRoot);