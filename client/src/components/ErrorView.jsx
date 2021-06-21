import { Typography } from "@material-ui/core";

export function ErrorView({ error }) {
  if (!error) {
    return null;
  }

  return (
    <Typography variant="body2" color="secondary">
      {error}
    </Typography>
  );
}
