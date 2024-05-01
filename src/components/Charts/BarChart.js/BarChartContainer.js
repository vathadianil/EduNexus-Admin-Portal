import { Box, Card, Typography } from "@mui/material";
import CustomBarChart from "./CustomBarChart";
import styles from "../../../css/bar-chart/bar-chart-container.module.css";

function BarChartContainer() {
  return (
    <Card className={styles.container}>
      <Box className={styles["text-container"]}>
        <Typography variant="h6" className={styles.title}>
          Revenue
        </Typography>
        <Typography variant="h4" className={styles["data-text"]}>
          10k
          <Typography
            variant="subtitle2"
            className={`${styles["data-text"]} ${styles["sub-data-text"]}`}
          >
            (Today)
          </Typography>
        </Typography>

        <Typography variant="subtitle1" className={styles.title}>
          All Villages
        </Typography>
      </Box>
      <Box className={styles["chart-container"]}>
        <Box className={styles.chart}>
          <CustomBarChart />
        </Box>
      </Box>
    </Card>
  );
}

export default BarChartContainer;
