"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function ComplaintBarChart() {
  //---------------------- Dummy data set
  const dashboardData = {
    longPendingComplainCategoryAndCount: [
      { name: "Category 1", count: 15 },
      { name: "Category 2", count: 30 },
      { name: "Category 5", count: 30 },
      { name: "Category 22", count: 30 },
      { name: "Category 3", count: 25 },
      { name: "Category 4", count: 10 },
    ],
  };

  const { longPendingComplainCategoryAndCount } = dashboardData;

  const dataset =
    longPendingComplainCategoryAndCount.length === 0
      ? [{ name: "No Data", count: 0 }]
      : longPendingComplainCategoryAndCount;

  // Modify the dataset to include the word "Related" in each label
  const modifiedDataset = dataset.map((item) => ({
    ...item,
    name: `${item.name}`,
  }));

  return (
    <Card sx={{ boxShadow: "0px 10px 40px 0px #00000008", borderRadius: 3 }}>
      <Stack
        sx={{ height: 460 }}
        direction="column"
        justifyContent="space-between"
      >
        <CardContent sx={{ alignContent: "end" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Long Pending Tickets Categories
          </Typography>
          <Stack
            sx={{ pl: 0, textAlign: "right" }}
            direction="row"
            alignContent="flex-end"
            justifyContent="flex-end"
          >
            <BarChart
              margin={{
                right: 0,
                left:80
              }}
              width={520}
              height={380}
              dataset={modifiedDataset} // Use the modified dataset
              yAxis={[
                {
                  scaleType: "band",
                  dataKey: "name",
                  tickLabelStyle: {
                    fontSize: 12,
                  },
                },
              ]}
              series={[
                { dataKey: "count", color: "#CEB900", label: "Ticket Count" },
              ]}
              layout="horizontal"
              slotProps={{
                legend: {
                  itemMarkHeight: 9,
                  itemMarkWidth: 9,
                  labelStyle: {
                    fontSize: 15,
                  },
                },
              }}
            />
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
}
