import { Box, Grid } from '@mui/material';
import React from 'react';
import CallDetails from '../CallDetails/CallDetails';
import CallRatio from '../CallRatio/CallRatio';

export default function DashboardContent() {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid item xs={5}>
          <CallDetails />
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ border: '1px solid #ccc', padding: 2, textAlign: 'center' }}><CallRatio/></Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ border: '1px solid #ccc', padding: 2, textAlign: 'center' }}>Hello</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
