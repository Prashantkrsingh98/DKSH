import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PieChartIcon from "@mui/icons-material/PieChart";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";
import { height } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
      paddingBottom: "50px",
    }}
  >
    •
  </Box>
);

export default function Cards(props) {
  const [raised, setRaised] = useState(false);
  console.log(props.header);

  const onCardClick = () => {
    console.log("test");
    props.onClickCard(props.path)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: "50px",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Card
        sx={{
          minWidth: 220,
          minHeight: 200,
          backgroundColor: "#f1f1f196",
          textAlign: "left",
        }}
        raised={raised}
        onMouseEnter={() => setRaised(true)}
        onMouseLeave={() => setRaised(false)}
      >
        <CardActionArea onClick={onCardClick} sx={{ height: "100%" }}>
          <CardContent>
            {props.header ? (
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "750",
                  fonSize: "1.5rem",
                  lineHeight: "23px",
                  marginBottom: "0px",
                }}
                color="#594952"
                gutterBottom
              >
                {props.header}
              </Typography>
            ) : (
              <></>
            )}
            {props.subHeader ? (
              <Typography
                sx={{ mb: 1, paddingBottom: "38px", color: "#bfbfc7" }}
              >
                {props.subHeader}
              </Typography>
            ) : (
              <></>
            )}
            {props.icon}
            {props.bottomText ? (
              <Typography sx={{ mb: 1, color: "#bfbfc7", fontSize: "0.98rem" }}>
                {props.bottomText}
              </Typography>
            ) : (
              <></>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
