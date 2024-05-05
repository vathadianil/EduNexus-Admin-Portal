import { PieChart } from "@mui/x-charts";
import styles from "../../../css/pie-chart/pie-chart.module.css";
import { Card, Typography } from "@mui/material";

function CustomPieChart({ dataset, style, total }) {
  return (
    <div className={styles["pie-chart-container"]}>
      <PieChart
        series={[
          {
            data: dataset,
            paddingAngle: 5,
            innerRadius: 70,
            outerRadius: 80,
            cornerRadius: 10,
          },
        ]}
        margin={{ left: 0, right: 0 }}
        width={200}
        height={300}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
      />
      <Card
        className={styles["pie-chart-card"]}
        style={{
          boxShadow: `0 2px 1px -50px ${style.colorGreen50}, 0 1px 1px -2px  ${style.colorGreen50}, 0 1px 50px 0  ${style.colorGreen800}`,
        }}
      >
        <Typography
          className={styles["pie-chart-value"]}
          variant="h6"
          style={{
            color: style.colorGreen800,
          }}
        >
          {total}
        </Typography>
      </Card>
    </div>
  );
}

export default CustomPieChart;
