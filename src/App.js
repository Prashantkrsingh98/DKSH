import logo from "./logo.svg";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SSOLogin from "./loginScreen/SSOLogin";
import DashboardList from "./DashboardList/DashboardList";
import ConnectClient from "./connectClient/ConnectClient";
import Cards from "./resusableComponent/Cards";
import ClientSalesDashboard from "./salesDashboard/ClientSalesDashboard";
import InventoryTracking from "./inventoryTracking/InventoryTracking";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      {/* {loginStatus ? (
        <SSOLogin setLoginStatus={setLoginStatus} />
      ) : (
        // <ConnectClient />
        // <ClientSalesDashboard />
        <DashboardList />
      )} */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SSOLogin}></Route>
          <Route exact path="/connect_client" component={ConnectClient}></Route>
          <Route
            exact
            path="/connect_client/dashboard_List"
            component={DashboardList}
          ></Route>
          <Route
            exact
            path="/connect_client/dashboard_List/client_sales_dashboard"
            component={ClientSalesDashboard}
          ></Route>
           <Route
            exact
            path="/connect_client/Inventory_tracking"
            component={InventoryTracking}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
