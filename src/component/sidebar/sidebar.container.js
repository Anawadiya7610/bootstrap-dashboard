import { Sidebar } from "./sidebar.component";
import { connect } from "react-redux";
// import { setConvertType } from "../../api/user/userAction";

const mapDispatchToProps = {
  // setConvertType,
};
const mapStateToProps = () => ({
  // convertType: state,
});

export const SidebarPageContainer = connect(mapStateToProps, {})(Sidebar);
