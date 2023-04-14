import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPageContainer } from "./views/LoginPage/login.container";
import { DashboardPageContainer } from "./views/dashboard/dashboard.container";
// import { SidebarPageContainer } from "./component/sidebar/sidebar.container";
import { HeaderPageContainer } from "./component/header/header.container";
import { HomePageContainer } from "./views/homeDashboard/HomeDas.container";
import { LineChartsPageContainer } from "./views/chart/lineChart.container";
import { CalendarPageContainer } from "./views/calendar/calendar.container";
import { DataTablePageContainer } from "./views/datatable/table.container";
import { OrderPageContainer } from "./views/order/order.container";
import { RatePageContainer } from "./views/rate/rate.container";
import { UserPageContainer } from "./views/user/user.container";
import { VisitorPageContainer } from "./views/visitors/visitor.container";
import { UserFormPageContainer } from "./views/Form/form.container";
import { NetSidebarPageContainer } from "./component/netSidebar/netSidebar.container";
import {NewTabPageContainer}  from "./views/newTable/newtable.container";
import {TableDataPageContainer}  from "./views/classTable/table.container";

function RoutePath() {
  return (
    // <Route exact path="/sidebar" element={<SidebarPageContainer />} />
    <Routes>
      <Route exact path="/" element={<LoginPageContainer />} />
      <Route exact path="/dashboard" element={<DashboardPageContainer />} />
      <Route exact path="/header" element={<HeaderPageContainer />} />
      <Route exact path="/home" element={<HomePageContainer />} />
      <Route exact path="/chart" element={<LineChartsPageContainer />} />
      <Route exact path="/calendar" element={<CalendarPageContainer />} />
      <Route exact path="/table" element={<DataTablePageContainer />} />
      <Route exact path="/order" element={<OrderPageContainer />} />
      <Route exact path="/rate" element={<RatePageContainer />} />
      <Route exact path="/user" element={<UserPageContainer />} />
      <Route exact path="/visitor" element={<VisitorPageContainer />} />
      <Route exact path="/form" element={<UserFormPageContainer />} />
      <Route exact path="/net" element={<NetSidebarPageContainer />} />
      <Route exact path="/newtable" element={<NewTabPageContainer />} />
      <Route exact path="/class" element={<TableDataPageContainer />} />

    </Routes>
  );
}

export default RoutePath;
