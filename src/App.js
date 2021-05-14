import HomePage from "./pages/HomePage/HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import HeaderNavBar from "./components/HeaderNavBar/HeaderNavBar";

function App() {
  return (
    <Router>
      <div>
        <HeaderNavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/:slug">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
