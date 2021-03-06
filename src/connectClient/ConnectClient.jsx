import React from "react";
import Header from "../resusableComponent/Header";
import SubHeader from "../resusableComponent/SubHeader";
import Cards from "../resusableComponent/Cards";
import IconButton from "@mui/material/IconButton";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./ConnectClient.css";

// const home = "home";
// const back = "back";
const subHeading = "Connect Client";
function ConnectClient(props) {
  const headerAnalytics = "Analytical Solution";
  const subHeaderAnalytics = "Dashboards";

  const headerInventory = "Inventory Tracking";
  const subHeaderInventory = "Inventory";

  const action = () => {
    console.log("Card is clicked");
  };

  const analyticsIcon = (
    <IconButton aria-label="DashBoard" sx={{ padding: "2px" }}>
      <PieChartIcon sx={{ color: "#CB3B51", fontSize: "40px" }} />
    </IconButton>
  );

  const trackingIcon = (
    <IconButton aria-label="Track" sx={{ padding: "2px" }}>
      <LocalShippingIcon sx={{ color: "#CB3B51", fontSize: "40px" }} />
    </IconButton>
  );

  const onClickCard = (path) => {
    console.log("path", path);
    props.history.push(path);
  };

  return (
    <>
      <div>
        <Header />
        <SubHeader subHeading={subHeading} />
      </div>
      <div className="tileContainer">
        <Cards
          header={headerAnalytics}
          subHeader={subHeaderAnalytics}
          icon={analyticsIcon}
          action={action}
          path="/connect_client/dashboard_List"
          onClickCard={onClickCard}
        />
        <Cards
          header={headerInventory}
          subHeader={subHeaderInventory}
          icon={trackingIcon}
          path="/connect_client/inventory_tracking"
          onClickCard={onClickCard}
        />
      </div>
    </>
  );
}

export default ConnectClient;
