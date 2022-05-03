import React from "react";
import Header from "../resusableComponent/Header";
import SubHeader from "../resusableComponent/SubHeader";
import Cards from "../resusableComponent/Cards";
import IconButton from "@mui/material/IconButton";
import PieChartIcon from "@mui/icons-material/PieChart";
import "./ConnectClient.css";

const home = "home";
const back = "back";
function ConnectClient() {
  const headerAnalytics = "Analytical Solution";
  const subHeaderAnalytics = "Dashboards";

  const headerInventory = "Inventory Tracking";
  const subHeaderInventory = "Inventory";

  const analyticsIcon = <IconButton aria-label="DashBoard" sx={{ padding: "2px" }}>
  <PieChartIcon sx={{ color: "#CB3B51", fontSize: "40px" }} />
</IconButton>

  return (
    <>
      <div>
        <Header />
        <SubHeader />
      </div>
      <div className="tileContainer">
        <Cards header={headerAnalytics} subHeader={subHeaderAnalytics} icon={analyticsIcon} />
        <Cards header={headerInventory} subHeader={subHeaderInventory}/>
      </div>
    </>
  );
}

export default ConnectClient;
