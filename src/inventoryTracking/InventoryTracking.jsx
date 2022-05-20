import React from "react";
import "./InventoryTracking.css";

function InventoryTracking() {
  return (
    // <div
    //   className="iFrameStyle"
    //   dangerouslySetInnerHTML={{
    //     __html:
    //       "",
    //   }}
    // />
    // <iframe
    //   height="100vh"
    //   width="100vw"
    //   src="https://flpnwc-uk81qreeol.dispatcher.ap1.hana.ondemand.com/sites?siteId=f2b0de7c-f576-43c6-95ef-e8dc0b3a9977 "
    // />

    <div
      dangerouslySetInnerHTML={{
        __html:
          '<iframe height="600px" width="100%" marginTop="10px" src="https://flpnwc-uk81qreeol.dispatcher.ap1.hana.ondemand.com/" />',
      }}
    />
  );
}

export default InventoryTracking;
