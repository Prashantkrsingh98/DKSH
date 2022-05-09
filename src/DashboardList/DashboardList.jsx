import React from "react";
import Header from "../resusableComponent/Header";
import SubHeader from "../resusableComponent/SubHeader";
import Cards from "../resusableComponent/Cards";
import IconButton from "@mui/material/IconButton";
import PieChartIcon from "@mui/icons-material/PieChart";
import "./DashboardList.css";

const home = "home";
const back = "back";
const subHeading = "Analytical Solution";
function DashboardList(props) {
  const headerAnalytics = "Sales Insight Dashboard";
  const subHeaderAnalytics = "Dashboards";

  const headerInventory = "Inventory Insight Dashboard";
  const subHeaderInventory = "Inventory";

  const analyticsIcon = (
    <IconButton aria-label="DashBoard" sx={{ padding: "2px" }}>
      <PieChartIcon sx={{ color: "#CB3B51", fontSize: "40px" }} />
    </IconButton>
  );

  const onClickCard = (path) => {
    console.log("path", path);
    props.history.push(path);
  };

  const onClickBack = (path) => {
    console.log("path", path);
    props.history.push(path);
  };

  return (
    <>
      <div>
        <Header />
        <SubHeader back={back} subHeading={subHeading} onClickBack={onClickBack} path="/connect_client" />
      </div>
      <div className="tileContainer">
        <Cards
          header={headerAnalytics}
          subHeader={subHeaderAnalytics}
          icon={analyticsIcon}
          path="/connect_client/dashboard_List/client_sales_dashboard"
          onClickCard={onClickCard}
        />
        <Cards
          header={headerInventory}
          subHeader={subHeaderInventory}
          icon={analyticsIcon}
        />
      </div>
    </>
  );
}

export default DashboardList;
