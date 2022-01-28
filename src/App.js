import { Button, Container } from "./elements";
import "./scss/App.scss";
import { AppRoutes, PrivateRoute } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {AppRoutes.map((route, item) =>
          route.private ? (
            <PrivateRoute key={item} {...route} />
          ) : (
            <Route key={item} {...route} />
          )
        )}
      </Switch>
    </>
  );
}

export default App;
