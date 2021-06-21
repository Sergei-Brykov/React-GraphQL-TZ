import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { useMutation } from "@apollo/client";

import { WorkerForm } from "./WorkerForm";
import { UPDATE_WORKER } from "../../query/updateWorker";
import { CREATE_WORKER } from "../../query/createWorker";

const useStyles = makeStyles({
  root: {
    background: "#3f51b5",
    color: "white",
  },
  title: {
    padding: 16,
    paddingBottom: 10,
    marginBottom: 24,
    background: "#f6f7f7",
  },
  example: {
    maxHeight: 300,
    overflow: "auto",
  },
});

export function AddWorkerForm({ worker, onClose, fetchAllUsers }) {
  const classes = useStyles();
  let title = "Ad new worker";
  let buttonTitle = "Ad worker";
  const [fetchWorker] = useMutation(worker.id ? UPDATE_WORKER : CREATE_WORKER);

  if (worker.id) {
    title = "Worker settings";
    buttonTitle = "Change worker data";
  }

  return (
    <Dialog
      maxWidth="md"
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={true}
    >
      <DialogTitle id="dialog-title" className={classes.root}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5">{title}</Typography>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box mt={1} width="100%">
          <Typography variant="h3">Input worker data: </Typography>

          <WorkerForm
            onClose={onClose}
            worker={worker}
            updateData={fetchAllUsers}
            buttonTitle={buttonTitle}
            fetchWorker={fetchWorker}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
