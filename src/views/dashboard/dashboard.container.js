import Dashboard from "./dashboard.component";
import { connect } from "react-redux";
import { setConvertType } from "./../../api/user/userAction";

const mapDispatchToProps = {
  setConvertType,
};

const mapStateToProps = (state) => ({
  convertType: state.userPage.convertType,
});

export const DashboardPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
