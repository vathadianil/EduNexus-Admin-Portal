import { TextField } from "@mui/material";

function Input({
  type = "text",
  margin = "normal",
  required = true,
  fullWidth = true,
  id,
  label,
  name,
  autoFocus = false,
  value,
  onInputChangeHandler,
  onBlurHandler,
  hasError,
}) {
  return (
    <TextField
      type={type}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      name={name}
      autoFocus={autoFocus}
      value={value}
      onChange={(event) => onInputChangeHandler(event?.target?.value)}
      onBlur={onBlurHandler}
      error={hasError}
      helperText={hasError && "Field is Required"}
    />
  );
}

export default Input;
