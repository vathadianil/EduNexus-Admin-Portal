import { Box, Card, Typography } from "@mui/material";
import styles from "../../../css/merchant-wise-revenue.module.css";
import PaytmLogo from "../../../assets/images/paytm.webp";
import PhonepeLogo from "../../../assets/images/phonepe.png";
import GpayLogo from "../../../assets/images/gpay.webp";

function MerchantWiseRevenue({ revenueData }) {
  const { title, data } = revenueData;
  return (
    <Card className={styles.container}>
      <Box className={styles["text-container"]}>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <Box className={styles["inner-container"]}>
          {data?.map((item) => (
            <Box key={item?.name} className={styles["wrapper"]}>
              <Box className={styles["title-container"]}>
                <img
                  className={styles.image}
                  src={
                    item?.name === "Paytm"
                      ? PaytmLogo
                      : item?.name === "PhonePe"
                      ? PhonepeLogo
                      : item?.name === "Google Pay"
                      ? GpayLogo
                      : ""
                  }
                  alt={item.name}
                />
                <Typography
                  style={{ color: item?.style?.color }}
                  variant={"h6"}
                >
                  {item?.name}
                </Typography>
              </Box>
              <Typography
                style={{
                  color: item?.style?.color,
                  background: item?.style?.backgroundColor,
                }}
                className={styles["amount-container"]}
                variant="h6"
              >
                &#8377; {item?.displayValue}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default MerchantWiseRevenue;
