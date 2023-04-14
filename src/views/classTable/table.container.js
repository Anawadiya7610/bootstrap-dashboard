import TableData from "./table.component";
import { connect } from "react-redux";

const mapDispatchToProps=()=>{
    
}
const mapStateToProps=state=>({

})

export const TableDataPageContainer = connect(mapStateToProps,mapDispatchToProps)(TableData);