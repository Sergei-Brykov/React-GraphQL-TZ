import { Box, CircularProgress } from "@material-ui/core";

export function LoadingComponent() {
  return (
    <Box
      width="100%"
      height="calc(100vh - 64px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={80} />
    </Box>
  );
}
