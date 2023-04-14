import NewTable from "./newtab.component";
import { connect } from "react-redux";

const mapDispatchToProps=()=>{
    
}
const mapStateToProps=state=>({

})

export const NewTabPageContainer = connect(mapStateToProps,mapDispatchToProps)(NewTable);