import Header from "./header.component";
import { connect } from "react-redux";
import { setConvertType } from "./../../api/user/userAction";

const mapDispatchToProps = {
  setConvertType,
};

const mapStateToProps = (state) => ({
  convertType: state.userPage.convertType,
});


export const HeaderPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

