import React from "react";
import "./App.css";
import FindPlayer from "./Components/findPlayer";
import SummonerData from "./Components/summoner";
import MatchHistory from "./Components/matchHistory";
import NavBar from "./Components/nav";
import { GlobalStyles, AppCont } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllChampions from "./Components/champions";
import ChampionPage from "./Components/championPage";

function App() {
  return (
    <AppCont>
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Route exact path="/" component={FindPlayer} />
          <Route path="/champions" component={AllChampions} />
          <Route path="/champion/:id" component={ChampionPage} />
        </ThemeProvider>
      </Router>
    </AppCont>
  );
}

export default App;
