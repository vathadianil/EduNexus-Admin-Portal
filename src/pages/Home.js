import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} open={open} />
      <SideNav open={open} />
      <Outlet />
    </Box>
  );
}
