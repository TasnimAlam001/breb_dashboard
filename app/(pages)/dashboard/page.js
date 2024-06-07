import Appbar from "@/app/(components)/Appbar/Appbar";
import DashboardContent from "@/app/(components)/DashboardContent/DashboardContent";
import { Box } from "@mui/material";


export default function Dashboard() {
  return (
    <Box sx={{mx:4}}>
        <Appbar/>
        <DashboardContent/>
        
        </Box>
  );
}
