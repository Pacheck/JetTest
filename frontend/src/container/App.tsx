import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Listagem from "../pages/Listagem";
import Formulario from "../pages/Formulario";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Listagem} />
        <Route path="/formulario" component={Formulario} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
