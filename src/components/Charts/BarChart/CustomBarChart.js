import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import styles from "../../../css/bar-chart/bar-chart.module.css";

const chartSetting = {
  width: 300,
  height: 200,
};

const valueFormatter = (value) => `Rs ${value}/-`;

export default function CustomBarChart({
  dataset = [],
  descriptionText,
  style,
}) {
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
              colors: [style?.color],
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
      <Typography
        variant="h6"
        className={styles["chart-sub-title"]}
        style={{ color: style?.color }}
      >
        {descriptionText}
      </Typography>
    </Box>
  );
}
