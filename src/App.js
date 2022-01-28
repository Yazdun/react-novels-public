import { ErrorHandler } from "./context";
import "./scss/App.scss";
import { AppRoutes, PrivateRoute } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components";

function App() {
  return (
    <>
      <Navigation />
      <ErrorHandler>
        <Switch>
          {AppRoutes.map((route, item) =>
            route.private ? (
              <PrivateRoute key={item} {...route} />
            ) : (
              <Route key={item} {...route} />
            )
          )}
        </Switch>
      </ErrorHandler>
    </>
  );
}

export default App;
