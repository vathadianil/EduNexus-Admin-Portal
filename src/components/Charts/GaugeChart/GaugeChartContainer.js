import { Box, Card, Typography } from "@mui/material";
import CustomGauageChart from "./CustomGauageChart";
import styles from "../../../css/gauge-chart/gauge-chart-container.module.css";

function GaugeChartContainer({ guageChartData }) {
  const { dataset, title, style, subTitle } = guageChartData;
  return (
    <Card className={styles.container}>
      <Box className={styles["text-container"]}>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <Typography
          variant="h4"
          className={styles["data-text"]}
          style={{ color: style?.colorGray800 }}
        >
          {dataset?.remaining}
        </Typography>

        <Typography
          variant="subtitle1"
          className={styles["data-text"]}
          style={{ color: style?.colorGray800 }}
        >
          {dataset?.remainingText}
        </Typography>
      </Box>
      <Box
        className={styles["chart-container"]}
        style={{ backgroundColor: style?.backgroundColor }}
      >
        <Box className={styles.chart}>
          <CustomGauageChart dataset={dataset} style={style} />
        </Box>
      </Box>
      <Box className={styles["text-container"]}>
        <Typography variant="h6" className={styles.title}>
          {subTitle}
        </Typography>
        <Typography
          variant="h4"
          className={styles["data-text"]}
          style={{ color: style?.colorGreen800 }}
        >
          {dataset?.value}
        </Typography>

        <Typography
          variant="subtitle1"
          className={styles["data-text"]}
          style={{ color: style?.colorGreen800 }}
        >
          {dataset?.valueText}
        </Typography>
      </Box>
    </Card>
  );
}

export default GaugeChartContainer;
