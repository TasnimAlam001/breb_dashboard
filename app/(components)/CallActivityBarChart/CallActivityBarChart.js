import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

export default function BarLabel() {
  const data = [
    { group: 'group A', value: 4 },
    { group: 'group B', value: 1 },
    { group: 'group C', value: 2 },
    { group: 'group D', value: 4 },
    { group: 'group E', value: 1 },
    { group: 'group F', value: 2 },
  ];

  return (
    <Box sx={{ boxShadow: "0px 10px 40px 0px #00000008", borderRadius: 3 , bgcolor:"white"}}>

      <BarChart 
        dataset={data}
        xAxis={[{ scaleType: 'band', dataKey: 'group' }]}
        series={[
          {
            dataKey: 'value',
            // label: {
            //   position: 'top',
            //   content: (params) => `${params.value}`, // This line ensures the values are displayed correctly
            // },
            // bar: true,
          },
        ]}
        yAxis={[{ scaleType: 'linear' }]}
        width={500}
        height={300}
        barCategoryGap={0.5}
        barGap={0.2}
      />
    </Box>
  );
}
