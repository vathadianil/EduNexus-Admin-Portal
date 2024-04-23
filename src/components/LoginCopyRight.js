import { Link, Typography } from "@mui/material";
import styles from "../css/login.module.css";

function LoginCopyRight() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className={styles.copyright}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EduNexus
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default LoginCopyRight;
