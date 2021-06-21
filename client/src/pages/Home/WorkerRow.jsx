import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export function WorkerRow({ worker, changeWorker, deleteWorker }) {
  return (
    <TableRow key={worker.name}>
      <TableCell>{worker.fullName}</TableCell>
      <TableCell>{worker.position}</TableCell>
      <TableCell>{worker.birthday}</TableCell>
      <TableCell>{worker.payment}</TableCell>
      <TableCell>{worker.id}</TableCell>
      <TableCell align="right">
        <IconButton size="small" onClick={() => changeWorker(worker)}>
          <SettingsIcon />
        </IconButton>
        <IconButton
          style={{ marginLeft: 8 }}
          size="small"
          onClick={() => deleteWorker(worker)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
