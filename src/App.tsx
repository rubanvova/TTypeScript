import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route component={TodosPage} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
