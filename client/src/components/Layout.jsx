import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { api } from "../Api";
import { path } from "../provider/path";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

export function Layout({ children, user }) {
  const classes = useStyles();
  const history = useHistory();

  const logOutHandler = () => {
    api
      .logOut()
      .then(() => history.push(path.login))
      .catch(() => history.push(path.error));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            width={45}
            src="https://i.imgur.com/f8zF2fN_d.webp?maxwidth=760&fidelity=grand"
            alt="icon"
          />
          <Typography variant="h6" className={classes.title}>
            Office
          </Typography>
          {user && (
            <Button color="inherit" onClick={logOutHandler}>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
