import Logo from "../assets/images/icon.png";
import styles from "../css/login.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useInput from "../utils/hooks/useInput";
import Input from "./Input";
import SnackBar from "./SnackBar";
import useSnackBar from "../utils/hooks/useSnackBar";
import { login } from "../utils/Auth/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function validateText(text) {
  const isValid = !!String(text)?.trim();
  return isValid;
}

function LoginForm() {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { open, showSnackBar, hideSnackBar, snackBarProps } = useSnackBar();
  const {
    value: userId,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHandler,
    formStateChangeHandler: userIdInvalidHandler,
  } = useInput("", validateText);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    formStateChangeHandler: passwordInvalidHandler,
  } = useInput("", validateText);

  let formIsValid = false;

  if (userIdIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const inValidFormSubmitHandler = () => {
    userIdInvalidHandler();
    passwordInvalidHandler();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      showSnackBar({
        type: "error",
        message: "Please Input all the required fields",
      });

      inValidFormSubmitHandler();
      return;
    }
    const data = new FormData(event.currentTarget);

    setIsAuthenticating(true);
    try {
      const loginData = await login(data.get("userId"), data.get("password"));

      if (loginData?.token) {
        navigate("/home");
        localStorage.setItem("loginData", JSON.stringify(loginData));
      }
    } catch (error) {
      console.log(error);
      showSnackBar({
        type: "error",
        message: "Unable to Login. Check your credential or Try again Later",
      });

      setIsAuthenticating(false);
    }
  };
  return (
    <Box className={styles["inner-container"]}>
      <Avatar alt="EduNexus Logo" src={Logo} className={styles.logo} />
      <Typography component="h1" variant="h5">
        Sign in to EduNexus
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        className={styles["form-container"]}
      >
        <Input
          label={"User Id"}
          name={"userId"}
          id={"userId"}
          value={userId}
          onInputChangeHandler={userIdChangeHandler}
          onBlurHandler={userIdBlurHandler}
          hasError={userIdHasError}
        />

        <Input
          label={"Passwod"}
          type="password"
          name={"password"}
          id={"password"}
          value={password}
          onInputChangeHandler={passwordChangeHandler}
          onBlurHandler={passwordBlurHandler}
          hasError={passwordHasError}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={styles.btn}
          disabled={isAuthenticating}
        >
          Sign In
        </Button>
      </Box>
      <SnackBar
        open={open}
        handleClose={hideSnackBar}
        type={snackBarProps.type}
        message={snackBarProps.message}
      />
    </Box>
  );
}

export default LoginForm;
