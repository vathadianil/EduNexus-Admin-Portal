import { Alert, Snackbar } from "@mui/material";

function SnackBar({
  open,
  handleClose,
  type = "success",
  message = "Something went wrong! Please Try again later",
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
