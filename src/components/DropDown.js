import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DropDown({
  id,
  name,
  value,
  label,
  handleChange,
  onBlurHandler,
  hasError,
  data = [],
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id={id}> {label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
        onBlur={onBlurHandler}
        error={hasError}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
