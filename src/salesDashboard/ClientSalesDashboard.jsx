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
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmU5YzQ2NDEtM2I1My00M2QwLWFmNzItOGYzZTY0ZDNhYTA1LyIsImlhdCI6MTY1MjA3NjUyMywibmJmIjoxNjUyMDc2NTIzLCJleHAiOjE2NTIwODExOTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFpNzN0VGR6N01pakNkNmZwVXBKKzZCVWFuMi91THNxR1lKYlVDN1hBZS9VYUpWQXAwdFdjY1FQL1RCMjdwZ01aL1B3WkFJdHNBVkFzY2w0eEpHMElKQi9nQmQvSzhLYUZGS2xQRzNPTEltOD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJTaW5naCIsImdpdmVuX25hbWUiOiJQcmFzYW50aCBLdW1hciIsImlwYWRkciI6IjE0LjE0My4yMDcuMjM0IiwibmFtZSI6IlByYXNhbnRoIEt1bWFyIFNpbmdoIChFeHQgLSBDb25zdWx0YW50KSIsIm9pZCI6IjUyOGU0ZDVkLWEzZjEtNDAxYS04ZGQ1LWFkZmUzYTA1ZTA0MiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS04ODI1NjU3MDUtMzMwNjQ2NzEyLTQyODE3MjI4NTItMTgzNjAxIiwicHVpZCI6IjEwMDMyMDAxRjE0MkRGREQiLCJyaCI6IjAuQVFZQVFVYWNfbE03MEVPdmNvOC1aTk9xQlFrQUFBQUFBQUFBd0FBQUFBQUFBQUFHQUs4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImpYelZTVkU1YU5aME03YTFGamNxeFZqNWxsYlh2aEdpazVQeWtaNG8yNW8iLCJ0aWQiOiJmZTljNDY0MS0zYjUzLTQzZDAtYWY3Mi04ZjNlNjRkM2FhMDUiLCJ1bmlxdWVfbmFtZSI6InByYXNhbnRoLmt1bWFyLnNpbmdoQGRrc2guY29tIiwidXBuIjoicHJhc2FudGgua3VtYXIuc2luZ2hAZGtzaC5jb20iLCJ1dGkiOiJ4RFhxdmctVElFR0lXcEpKS2M0ekFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.o6EIJzQ7vLVRe-lBOlkCvKuypGy8H9BAC6VRFotx1e-yNdbNQiNVfZaRYcevh3LsQnA1M3JTvXuBk9b_x35KGdJF-3A7uM7BUqaHOfyGpbuOSkgSsPtJ3mQNhd5Z53C1HHI-qfneYLQDmxUHLRT89mdCjn3TNwZsFu0PP_rLdZTtGcfWiziRUC9n-9Wlnwx3GDA3-wR4lqycFy-DaT9735kxyohG_VAJMIH1szTy9j4v_ojvD-4RCLc5NbyuBw5bG3w9saKooCsxAxHEmXPNr_R5nHu4OnhOu6hen71j5KYxIMAkmdlB57w8aylZ7kfqWajTyFFHVDeBge3WhJItIQ",
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
