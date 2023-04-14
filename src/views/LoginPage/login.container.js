import Login from "./login.component";
import { connect } from "react-redux";

const mapDispatchToProps=()=>{
    
}
const mapStateToProps=state=>({

})

export const LoginPageContainer = connect(mapStateToProps,mapDispatchToProps)(Login);