import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Main from "./Main";
import NewsPaper from "./NewsPaper";
import Magazine from "./Magazine";
import PuzzlePage from "./PuzzlePage";
import Cubes from "./Cubes";
import GeneratePuzzle from "./GeneratePuzzle";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/newspaper" component={NewsPaper} />
        <Route exact path="/cubes" component={Cubes} />
        <Route exact path="/puzzlePage" component={PuzzlePage} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/greet" component={Header} />
        <Route exact path="/live/puzzle/:slug" component={GeneratePuzzle} />
      </Switch>
    </div>
  );
}
