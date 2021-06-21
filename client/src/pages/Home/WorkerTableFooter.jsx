import {
  Box,
  IconButton,
  TableCell,
  TableFooter,
  Typography,
} from "@material-ui/core";
import React from "react";
import TableRow from "@material-ui/core/TableRow";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

export function WorkerTableFooter({
  page,
  changePageHandler,
  isDisabledNextButton,
}) {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={6}>
          <Box
            width="100%"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              disabled={!(page - 1)}
              size="small"
              onClick={() => changePageHandler(page - 1)}
            >
              <ArrowLeftIcon />
            </IconButton>
            <Typography variant="body1">{page} page</Typography>
            <IconButton
              disabled={isDisabledNextButton}
              size="small"
              onClick={() => changePageHandler(page + 1)}
            >
              <ArrowRightIcon />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
