import { Inter } from "next/font/google";
import { Box } from '@mui/material';
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ backgroundColor: '#f5f8fa', minHeight: '100vh' }}>
          {children}
        </Box>
      </body>
    </html>
  );
}
