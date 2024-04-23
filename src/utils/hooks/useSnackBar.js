import { useState } from "react";

const useSnackBar = () => {
  const [open, setOpen] = useState(false);
  const [snackBarProps, setSnackBarProps] = useState({ type: "", message: "" });
  const showSnackBar = ({ type, message }) => {
    setOpen(true);
    setSnackBarProps((prevState) => ({
      ...prevState,
      type: type,
      message: message,
    }));
  };

  const hideSnackBar = () => {
    setOpen(false);
    setSnackBarProps((prevState) => ({
      ...prevState,
      type: "",
      message: "",
    }));
  };

  return {
    open,
    showSnackBar,
    hideSnackBar,
    snackBarProps,
  };
};

export default useSnackBar;
