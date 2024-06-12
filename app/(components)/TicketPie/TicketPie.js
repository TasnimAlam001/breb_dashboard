"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";


// Dummy data
const dummyCompanyData = {
  totalTicketCount: 100,
  queryTicketCount: 30,
  complementTicketCount: 25,
  othersTicketCount: 45,
};

// The utility pie component
export default function TicketPie({ companyData = dummyCompanyData }) {
  let {
    totalTicketCount,
    queryTicketCount,
    complementTicketCount,
    othersTicketCount,
  } = companyData;

  const allCountsZero =
    totalTicketCount === 0 &&
    queryTicketCount === 0 &&
    complementTicketCount === 0 &&
    othersTicketCount === 0;

  let data = [
    { label: "Query", value: queryTicketCount, color: "#04984A" },
    { label: "Complement", value: complementTicketCount, color: "#10C6FF" },
    { label: "Others", value: othersTicketCount, color: "#3382EF" },
  ];

  // Making percentage of value
  const getArcLabel = (params) => {
    if (params.value == 0) {
      return " ";
    } else {
      const percent = params.value / totalTicketCount;
      return `${(percent * 100).toFixed(0)}%`;
    }
  };

  const width = 190;
  const height = 140;
  const boxHeight = 210;

  return (
    <div>
      <Card sx={{ boxShadow: "0px 10px 40px 0px #00000008", borderRadius: 3 }}>
        <Stack
          sx={{ height: boxHeight }}
          direction="column"
          justifyContent="space-between"
        >
          <CardContent>
            <Grid container spacing={3} columnSpacing={3}>
              <Grid item xs={6}>
                {/* <Typography variant="h6">Monthly Ticket</Typography> */}
                {allCountsZero ? (
                  <Typography sx={{ mt: 8 }} variant="body1" align="center">
                    No Data Found
                  </Typography>
                ) : (
                  <PieChart
                    margin={{
                      top: 0,
                      left: 40,
                      bottom:10
                    }}
                    series={[
                      {
                        outerRadius: 65,
                        innerRadius: 30,
                        data,
                        arcLabel: getArcLabel,
                      },
                    ]}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    width={width}
                    height={height}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fill: "white",
                        fontSize: 13,
                      },
                    }}
                  />
                )}
              </Grid>
              <Grid item xs={5} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: 3 }}>
                {data.map((name) => (
                  <Stack
                    key={name.label}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: name.color,
                      }}
                    />
                    <Typography
                      sx={{ fontSize: 15 }}
                      className="list-disc"
                    >
                      {name.label}
                    </Typography>
                  </Stack>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}
