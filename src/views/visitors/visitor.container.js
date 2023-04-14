import Visitor from "./visitor.component";
import { connect } from "react-redux";
import { setConvertType } from "../../api/user/userAction";

const mapDispatchToProps={
    setConvertType,
}
const mapStateToProps=state=>({
    convertType: state.userPage.convertType,
})

export const VisitorPageContainer = connect(mapStateToProps,mapDispatchToProps)(Visitor);