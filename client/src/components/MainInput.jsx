import { Box, TextField } from "@material-ui/core";

export function MainInput({
  mt,
  onChange,
  value,
  placeholder,
  error,
  variant = "outlined",
  fullWidth = true,
  size = "small",
  type = "text",
  label = "",
}) {
  return (
    <Box mt={mt}>
      <TextField
        label={label || placeholder}
        value={value}
        error={!!error}
        onChange={onChange}
        variant={variant}
        fullWidth={fullWidth}
        placeholder={placeholder}
        size={size}
        type={type}
      />
    </Box>
  );
}
