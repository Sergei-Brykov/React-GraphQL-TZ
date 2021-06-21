import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import { WorkerTableHead } from "./WorkerTableHead";
import { WorkerRow } from "./WorkerRow";
import { WorkerTableFooter } from "./WorkerTableFooter";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function WorkerListView({
  workers,
  changeWorker,
  deleteWorker,
  page,
  sort,
  setSort,
  changePageHandler,
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <WorkerTableHead setSort={setSort} sort={sort} />
        <TableBody>
          {workers.map((worker) => (
            <WorkerRow
              key={worker.id}
              worker={worker}
              changeWorker={changeWorker}
              deleteWorker={deleteWorker}
            />
          ))}
        </TableBody>

        <WorkerTableFooter
          page={page}
          changePageHandler={changePageHandler}
          isDisabledNextButton={!(workers.length === 10)}
        />
      </Table>
    </TableContainer>
  );
}
