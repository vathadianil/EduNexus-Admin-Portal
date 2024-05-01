import { Box } from "@mui/material";
import React from "react";
import styles from "../css/dashboard.module.css";
import BarChartContainer from "../components/Charts/BarChart.js/BarChartContainer";

function Dashboard() {
  return (
    <Box className={styles.container}>
      <BarChartContainer />
      <BarChartContainer />
      <BarChartContainer />
    </Box>
  );
}

export default Dashboard;
