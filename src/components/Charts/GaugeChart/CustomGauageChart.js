import { Card, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import styles from "../../../css/gauge-chart/gauge-chart.module.css";

function CustomGauageChart({ dataset, style }) {
  return (
    <div style={{ position: "relative" }}>
      <Gauge
        width={200}
        height={300}
        value={dataset?.percentage}
        innerRadius="90%"
        outerRadius="100%"
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            display: "none",
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: style.colorGreen800,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      />

      <Card
        className={styles["gauge-chart-card"]}
        style={{
          boxShadow: `0 2px 1px -50px ${style.colorGreen50}, 0 1px 1px -2px  ${style.colorGreen50}, 0 1px 50px 0  ${style.colorGreen800}`,
        }}
      >
        <Typography
          className={styles["gauge-chart-value"]}
          variant="h6"
          style={{
            color: style.colorGreen800,
          }}
        >
          65%
        </Typography>
      </Card>
    </div>
  );
}

export default CustomGauageChart;
