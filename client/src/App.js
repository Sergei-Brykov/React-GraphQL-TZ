import {useEffect, useState} from "react"
import {Redirect, Route, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles'

import {routes} from './pages/router'
import globalTheme from './theme.js';
import './App.css';

const theme = createMuiTheme(globalTheme);

function App() {
  const [auth, setAuth] = useState(false)
  const history = useHistory();

  useEffect(() => {
    history.push('./login')
  }, []);


  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </ThemeProvider>

    </div>
  );
}

export default App;
