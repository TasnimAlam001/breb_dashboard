import { Box, Grid, Typography, Divider } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";

function CallBox({ icon, title, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: 1,
        mt:2,
        height: "100%",
      }}
    >
      {icon}
      <Box sx={{ marginLeft: 1, textAlign: "center" , p:1}}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Box>
    </Box>
  );
}
export default function CallDetails() {
  const data = [
    { icon: <CallIcon />, title: "Call Offers", value: "1324" },
    { icon: <CallIcon />, title: "Call Answers", value: "1324" },
    { icon: <CallIcon />, title: "ABN%", value: "1324" },
    { icon: <CallIcon />, title: "Call Offers", value: "1324" },
    { icon: <CallIcon />, title: "Call Answers", value: "1324" },
    { icon: <CallIcon />, title: "ABN%", value: "1324" },
  ];
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: 1,
        }}
      >
        <Grid container alignItems="center" sx={{ p: 1 }}>
          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CallIcon />
              <Box sx={{ marginLeft: 1, textAlign: "center" }}>
                <Typography variant="subtitle2">Call Offers</Typography>
                <Typography variant="h6">1324</Typography>
              </Box>
            </Box>
          </Grid>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2">Call Answers</Typography>
                <Typography variant="h6">1324</Typography>
              </Box>
            </Box>
          </Grid>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2">ABN%</Typography>
                <Typography variant="h6">1324</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CallBox icon={item.icon} title={item.title} value={item.value} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
