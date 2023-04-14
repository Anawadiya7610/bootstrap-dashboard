import Order from "./order.component";
import { connect } from "react-redux";
import { setConvertType } from "./../../api/user/userAction";

const mapDispatchToProps={
    setConvertType,
}
const mapStateToProps=state=>({
    convertType: state.userPage.convertType
})

export const OrderPageContainer = connect(mapStateToProps,mapDispatchToProps)(Order);