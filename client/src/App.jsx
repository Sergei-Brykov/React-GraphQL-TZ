import React from "react";
import { Switch } from "react-router-dom";

import { Layout } from "./components/Layout";
import "./App.css";
import { LoadingComponent } from "./components/LoadingComponent";
import { MainRoutes } from "./provider/MainRoutes";
import { useAuth } from "./hooks/useAuth";

function App() {
  const [init, user] = useAuth();

  return (
    <Layout user={user}>
      <Switch>{init ? <MainRoutes /> : <LoadingComponent />}</Switch>
    </Layout>
  );
}

export default App;
