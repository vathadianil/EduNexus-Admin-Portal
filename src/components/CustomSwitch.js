import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";

function CustomSwitch({
  label,
  name,
  value,
  labelPlacement = "top",
  leftLabel,
  rightLabel,
  handleChange,
}) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {leftLabel && <Typography>{leftLabel}</Typography>}
      <FormControlLabel
        name={name}
        checked={value}
        control={<Switch color="primary" />}
        label={label}
        labelPlacement={labelPlacement}
        onChange={(e) => handleChange(e.target.checked)}
      />
      {rightLabel && <Typography>{rightLabel}</Typography>}
    </Stack>
  );
}

export default CustomSwitch;
