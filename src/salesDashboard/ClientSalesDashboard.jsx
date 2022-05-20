import React from "react";
import Header from "../resusableComponent/Header";
import SubHeader from "../resusableComponent/SubHeader";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "./ClientSalesDashboard.css";

const back = "back";
const subHeading = "Sales Insight Dashboard";
function ClientSalesDashboard(props) {
  const onClickBack = (path) => {
    console.log("path", path);
    props.history.push(path);
  };
  return (
    <>
      <div>
        <Header />
        <SubHeader
          back={back}
          subHeading={subHeading}
          onClickBack={onClickBack}
          path="/connect_client/dashboard_List"
        />
      </div>
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "ed83a823-c935-4673-997a-a18bba01d5c8",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=ed83a823-c935-4673-997a-a18bba01d5c8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik5CelREY2NncmIxQUJycExMQ1dDdVV6MWRtSGNqNjFlOHVBOXhaMFRtRmciLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9",
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </>
  );
}

export default ClientSalesDashboard;
