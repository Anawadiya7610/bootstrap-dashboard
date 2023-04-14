import User from "./user.component";
import { connect } from "react-redux";
import {setConvertType} from "./../../api/user/userAction";


const mapDispatchToProps={
    setConvertType,
}
const mapStateToProps=state=>({
    convertType: state.userPage.convertType,
})
export const UserPageContainer = connect(mapStateToProps,mapDispatchToProps)(User);