import CalendarDate from "./calendar.component";
import { connect } from "react-redux";

const mapDispatchToProps = () => {};
const mapStateToProps = (state) => ({});

export const CalendarPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDate);
