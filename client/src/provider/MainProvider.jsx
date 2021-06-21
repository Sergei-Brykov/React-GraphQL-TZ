import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import globalTheme from "./theme";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "../config";

const theme = createMuiTheme(globalTheme);

const client = new ApolloClient({
  uri: config.host + "/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

export function MainProvider({ children }) {
  return (
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ApolloProvider>
        </Provider>
      </Router>
    </React.StrictMode>
  );
}
