import CustomPieChart from "./CustomPieChart";
import { Box, Card, Typography } from "@mui/material";
import styles from "../../../css/pie-chart/pie-chart-container.module.css";

function PieChartContainer({ pieChartData }) {
  const { title, data, style, total } = pieChartData;
  return (
    <Card className={styles.container}>
      <Box className={styles["text-container"]}>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <Typography
          variant="h6"
          className={styles["data-text"]}
          style={{ color: data[0]?.color }}
        >
          {data[0]?.displayValue}
        </Typography>

        <Typography
          variant="subtitle1"
          className={styles["data-text"]}
          style={{ color: data[0]?.color }}
        >
          {data[0]?.label}
        </Typography>
      </Box>
      <Box className={styles["chart-container"]}>
        <CustomPieChart dataset={data} style={style} total={total} />
      </Box>
      <Box className={`${styles["text-container"]} ${styles["text-margin"]}`}>
        <Typography variant="h6" className={styles.title}></Typography>
        <Typography
          variant="h6"
          className={styles["data-text"]}
          style={{ color: data[1]?.color }}
        >
          {data[1]?.displayValue}
        </Typography>

        <Typography
          variant="subtitle1"
          className={styles["data-text"]}
          style={{ color: data[1]?.color }}
        >
          {data[1]?.label}
        </Typography>
      </Box>
    </Card>
  );
}

export default PieChartContainer;
