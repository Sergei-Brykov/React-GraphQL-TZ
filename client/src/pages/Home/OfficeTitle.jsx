import { Box, Button, Typography } from "@material-ui/core";

export function OfficeTitle({ onClick }) {
  return (
    <Box mt={2} mb={2} display="flex" justifyContent="space-between">
      <Typography variant={"h2"}>Worker list</Typography>
      <Box display="flex" justifyContent="center" alignItems="flex-end">
        <Button
          size="small"
          onClick={onClick}
          variant="contained"
          color="primary"
        >
          Add new worker
        </Button>
      </Box>
    </Box>
  );
}
