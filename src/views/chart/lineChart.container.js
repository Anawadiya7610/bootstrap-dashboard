import LineCharts from "./lineChart.component";
import { connect } from "react-redux";

const mapDispatchToProps=()=>{
    
}
const mapStateToProps=state=>({

})

export const LineChartsPageContainer = connect(mapStateToProps,mapDispatchToProps)(LineCharts);