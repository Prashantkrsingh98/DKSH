import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import SSOLogin from "./loginScreen/SSOLogin";
import ConnectClient from "./connectClient/ConnectClient";
import Cards from "./resusableComponent/Cards";
import ClientSalesDashboard from "./salesDashboard/ClientSalesDashboard";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      {/* {loginStatus ? (
        <SSOLogin setLoginStatus={setLoginStatus} />
      ) : (
        <ConnectClient />
        // <ClientSalesDashboard />
      )} */}


<PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: 'ed83a823-c935-4673-997a-a18bba01d5c8',
		embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ed83a823-c935-4673-997a-a18bba01d5c8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19',
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmU5YzQ2NDEtM2I1My00M2QwLWFmNzItOGYzZTY0ZDNhYTA1LyIsImlhdCI6MTY1MTU1NzU5MywibmJmIjoxNjUxNTU3NTkzLCJleHAiOjE2NTE1NjI2MDcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWUVnNTBuVE9rN3U2U3lFelJiNWJldTRiVXdjMkxXNUducVBkNTMvblREc2d4NXpNcjk1WWRXWDN0bkpCdjZzZU1mdVpBUT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiU2luZ2giLCJnaXZlbl9uYW1lIjoiUHJhc2FudGggS3VtYXIiLCJpcGFkZHIiOiIxNC4xNDMuMjA3LjIzNCIsIm5hbWUiOiJQcmFzYW50aCBLdW1hciBTaW5naCAoRXh0IC0gQ29uc3VsdGFudCkiLCJvaWQiOiI1MjhlNGQ1ZC1hM2YxLTQwMWEtOGRkNS1hZGZlM2EwNWUwNDIiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtODgyNTY1NzA1LTMzMDY0NjcxMi00MjgxNzIyODUyLTE4MzYwMSIsInB1aWQiOiIxMDAzMjAwMUYxNDJERkREIiwicmgiOiIwLkFRWUFRVWFjX2xNNzBFT3ZjbzgtWk5PcUJRa0FBQUFBQUFBQXdBQUFBQUFBQUFBR0FLOC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJqWHpWU1ZFNWFOWjBNN2ExRmpjcXhWajVsbGJYdmhHaWs1UHlrWjRvMjVvIiwidGlkIjoiZmU5YzQ2NDEtM2I1My00M2QwLWFmNzItOGYzZTY0ZDNhYTA1IiwidW5pcXVlX25hbWUiOiJwcmFzYW50aC5rdW1hci5zaW5naEBka3NoLmNvbSIsInVwbiI6InByYXNhbnRoLmt1bWFyLnNpbmdoQGRrc2guY29tIiwidXRpIjoiTkNoM0JkeDdQa0NxY2FpWkRiaG9BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.Du9ZFOs4Prl7uCoTM0K-evL5JJNMHbAK8R7OdA32cbdb-YmSJTf0cZ81-uu99_VoZpytSsel7RFvVgmSlFNacAhvuLpjA2ChyygM6MdrQY1CtKg63SQQLDzGu4ryGLRYV-26CZUjuNRv2sBYTovcuYZ4pK6_zlzIeOj1rPKfMh-w9YvYosmcao8ZZGJZEAEvSh7A6ryAxu_iE3Izik9-LIDtGZk5d_Jug9YOdNrAhQZ31H2oz7pOQtBysiYiEE_uvpwbWR0c9_ronfthOVtN36pJkhnhGvoZis7Nm8E0YUXVUSmZGoOc4QsFx0l_NydxkrzCdNxu8iXkV4Hcp9o4dQ',
		tokenType: models.TokenType.Aad,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = { 
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}]
		])
	}
		
	cssClassName = { "Embed-container" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.report = embeddedReport;
	}}
/>
    </>
  );
}

export default App;
