"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import CallDetails from "../CallDetails/CallDetails";
import CallRatio from "../CallRatio/CallRatio";
import TicketPie from "../TicketPie/TicketPie";
import CallActivityBarChart from "../CallActivityBarChart/CallActivityBarChart";
import ComplaintBarChart from "../ComplaintBarChart/ComplaintBarChart";

export default function DashboardContent() {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid item xs={4}>
          <CallDetails />
        </Grid>
        <Grid item xs={3}>
          
            <CallRatio />

          {/* <TicketPie/> */}
        </Grid>
        <Grid item xs>
          <CallActivityBarChart />
          {/* <ComplaintBarChart/> */}
        </Grid>
      </Grid>

      {/* -------------------- */}

      <Grid sx={{mt:2}} container columnSpacing={{ xs: 3 }}>
        <Grid item xs={4}>
          <CallDetails />
        </Grid>
        <Grid item xs={3}>
          
          <Box sx={{mb:2}}>
          <TicketPie />


          </Box>
          <TicketPie />
        </Grid>
        <Grid item xs>
          <ComplaintBarChart />
        </Grid>
      </Grid>
    </Box>
  );
}
