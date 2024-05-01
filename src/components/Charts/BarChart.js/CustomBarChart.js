import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import styles from "../../../css/bar-chart/bar-chart.module.css";

const chartSetting = {
  width: 300,
  height: 200,
};

const dataset = [
  {
    revenue: 20000,
    day: "01/04/24",
  },
  {
    revenue: 20000,
    day: "02/04/24",
  },
  {
    revenue: 30000,
    day: "03/04/24",
  },
  {
    revenue: 40000,
    day: "04/04/24",
  },
  {
    revenue: 50000,
    day: "05/04/24",
  },
  {
    revenue: 50000,
    day: "06/04/24",
  },
  {
    revenue: 40000,
    day: "07/04/24",
  },
  {
    revenue: 30000,
    day: "08/04/24",
  },
  {
    revenue: 50000,
    day: "09/04/24",
  },
  {
    revenue: 60000,
    day: "10/04/24",
  },
];

const valueFormatter = (value) => `Rs ${value}/-`;

export default function CustomBarChart() {
  return (
    <Box>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            disableLine: true,
            disableTicks: true,
            scaleType: "band",
            dataKey: "day",
            categoryGapRatio: 0.6,
            tickPlacement: "middle",
            tickLabelPlacement: "tick",
            colorMap: {
              type: "ordinal",
              colors: ["green"],
            },
          },
        ]}
        series={[{ dataKey: "revenue", valueFormatter }]}
        bottomAxis={null}
        leftAxis={null}
        slotProps={{
          bar: {
            clipPath: `inset(0px round 15px 15px 0px 0px)`,
          },
        }}
        {...chartSetting}
      />
      <Typography variant="h6" className={styles["chart-sub-title"]}>
        Last 10 Days
      </Typography>
    </Box>
  );
}
