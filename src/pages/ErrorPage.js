import { Box, CssBaseline, styled } from "@mui/material";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import LottiePlayer from "../components/LottiePlayer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function ErrorPage() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} open={open} />
      <SideNav open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        Error
        <LottiePlayer />
      </Box>
    </Box>
  );
}

export default ErrorPage;
