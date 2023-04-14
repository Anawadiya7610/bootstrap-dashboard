import Home from "./homeDas.component";
import { connect } from "react-redux";

const mapDispatchToProps=()=>{
    
}
const mapStateToProps=state=>({

})

export const HomePageContainer = connect(mapStateToProps,mapDispatchToProps)(Home);