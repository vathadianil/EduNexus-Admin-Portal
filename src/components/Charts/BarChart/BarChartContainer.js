import { Box, Card, Typography } from "@mui/material";
import CustomBarChart from "./CustomBarChart";
import styles from "../../../css/bar-chart/bar-chart-container.module.css";

function BarChartContainer({ barChartData }) {
  const { dataset, title, displayValue, subTitle, descriptionText, style } =
    barChartData;
  return (
    <Card className={styles.container}>
      <Box className={styles["text-container"]}>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <Box>
          <Typography
            variant="h4"
            className={styles["data-text"]}
            style={{ color: style?.color }}
          >
            {displayValue}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: style?.color }}
            className={`${styles["data-text"]} ${styles["sub-data-text"]}`}
          >
            (Today)
          </Typography>
        </Box>

        <Typography variant="subtitle1" className={styles.title}>
          {subTitle}
        </Typography>
      </Box>
      <Box
        className={styles["chart-container"]}
        style={{ backgroundColor: style?.backgroundColor }}
      >
        <Box className={styles.chart}>
          <CustomBarChart
            dataset={dataset}
            descriptionText={descriptionText}
            style={style}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default BarChartContainer;
