import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function DropDown({
  id,
  name,
  value,
  label,
  handleChange,
  onBlurHandler,
  hasError,
  data = [],
  required = true,
  style,
}) {
  return (
    <FormControl fullWidth error={hasError} sx={style}>
      <InputLabel id={id}> {label}</InputLabel>
      <Select
        sx={{ padding: 0, margin: 0 }}
        labelId={id}
        id={id}
        name={name}
        value={value}
        label={label}
        required={required}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={onBlurHandler}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {hasError && <FormHelperText>Selection is Required</FormHelperText>}
    </FormControl>
  );
}
