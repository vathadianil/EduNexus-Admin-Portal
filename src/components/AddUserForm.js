import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import useInput from "../utils/hooks/useInput";
import styles from "../css/add-user-form.module.css";
import DropDown from "./DropDown";
import CustomSwitch from "./CustomSwitch";
import axios from "../utils/axios/axios";
import { CREATE_USER, GET_ROLE_LIST } from "../utils/api/api-request";
import { AppContext } from "../store/app-context";

function validateText(text) {
  const isValid = !!String(text)?.trim();
  return isValid;
}

function AddUserForm({ handleClose, showSnackBar }) {
  const { onUserAdd } = useContext(AppContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [roleList, setRoleList] = useState([]);

  const getRoleList = async () => {
    const { data } = await axios.get(GET_ROLE_LIST);
    setRoleList(data?.response);
  };

  useEffect(() => {
    getRoleList();
  }, []);

  const {
    value: fname,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    formStateChangeHandler: fnameInvalidHandler,
  } = useInput("", validateText);

  const {
    value: lname,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    formStateChangeHandler: lnameInvalidHandler,
  } = useInput("", validateText);

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

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    formStateChangeHandler: emailInvalidHandler,
  } = useInput("", validateText);

  const {
    value: mobileno,
    isValid: mobilenoIsValid,
    hasError: mobilenoHasError,
    valueChangeHandler: mobilenoChangeHandler,
    inputBlurHandler: mobilenoBlurHandler,
    formStateChangeHandler: mobilenoInvalidHandler,
  } = useInput("", validateText);

  const {
    value: role,
    isValid: roleIsValid,
    hasError: roleHasError,
    valueChangeHandler: roleChangeHandler,
    inputBlurHandler: roleBlurHandler,
    formStateChangeHandler: roleInvalidHandler,
  } = useInput("", validateText);

  const { value: isactive, valueChangeHandler: isactiveChangeHandler } =
    useInput(true, validateText);

  let formIsValid = false;

  if (
    fnameIsValid &&
    lnameIsValid &&
    userIdIsValid &&
    passwordIsValid &&
    emailIsValid &&
    mobilenoIsValid &&
    roleIsValid
  ) {
    formIsValid = true;
  }

  const inValidFormSubmitHandler = () => {
    fnameInvalidHandler();
    lnameInvalidHandler();
    userIdInvalidHandler();
    passwordInvalidHandler();
    emailInvalidHandler();
    mobilenoInvalidHandler();
    roleInvalidHandler();
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
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const data = new FormData(event.currentTarget);

    const formValues = {
      aID: 0,
      email: data.get("email"),
      mobileno: data.get("mobileno"),
      fname: data.get("fname"),
      lname: data.get("lname"),
      isactive: data.get("isactive") === "on" ? 1 : 0,
      role: data.get("role"),
      userid: data.get("userId"),
      password: data.get("password"),
      collegeName: loginData?.collegeName,
      collegeID: loginData?.collegeId,
    };
    setIsAuthenticating(true);

    try {
      const { data } = await axios.post(CREATE_USER, formValues);
      if (data.returnCode === 1 && data.returnMessage === "Success") {
        handleClose();
        showSnackBar({
          type: "success",
          message: "User Added Successfully",
        });
        onUserAdd(new Date().getTime());
      }
    } catch (error) {
      console.log(error);
      showSnackBar({
        type: "error",
        message: "Unable to Submit. Check your credential or Try again Later",
      });
    }
    setIsAuthenticating(false);
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Box className={styles["form-container"]}>
        <Input
          label={"First Name"}
          name={"fname"}
          id={"fname"}
          value={fname}
          onInputChangeHandler={fnameChangeHandler}
          onBlurHandler={fnameBlurHandler}
          hasError={fnameHasError}
        />
        <Input
          label={"Last Name"}
          name={"lname"}
          id={"lname"}
          value={lname}
          onInputChangeHandler={lnameChangeHandler}
          onBlurHandler={lnameBlurHandler}
          hasError={lnameHasError}
        />
        <Input
          label={"Email"}
          name={"email"}
          id={"email"}
          type="email"
          value={email}
          onInputChangeHandler={emailChangeHandler}
          onBlurHandler={emailBlurHandler}
          hasError={emailHasError}
        />

        <Input
          label={"Mobile Number"}
          name={"mobileno"}
          id={"mobileno"}
          value={mobileno}
          onInputChangeHandler={mobilenoChangeHandler}
          onBlurHandler={mobilenoBlurHandler}
          hasError={mobilenoHasError}
        />

        <DropDown
          label={"Role *"}
          name={"role"}
          id={"role"}
          value={role}
          handleChange={roleChangeHandler}
          onBlurHandler={roleBlurHandler}
          hasError={roleHasError}
          data={roleList || []}
          style={{ marginTop: ".7em" }}
        />
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

        <CustomSwitch
          label={"Status"}
          name={"isactive"}
          leftLabel={"In-Active"}
          rightLabel={"Active"}
          value={isactive}
          handleChange={isactiveChangeHandler}
        />
      </Box>
      <Box sx={{ textAlign: "end" }}>
        <Button
          sx={{ width: "20%" }}
          type="submit"
          fullWidth
          variant="contained"
          disabled={isAuthenticating}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default AddUserForm;
