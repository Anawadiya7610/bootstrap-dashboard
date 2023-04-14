import UserForm from "./form.component";
import { connect } from "react-redux";
import { setConvertType } from "./../../api/user/userAction";

const mapDispatchToProps={
    setConvertType,
}
const mapStateToProps=state=>({
    convertType: state.userPage.convertType
})

export const UserFormPageContainer = connect(mapStateToProps,mapDispatchToProps)(UserForm);