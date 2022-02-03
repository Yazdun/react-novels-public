import { ErrorHandler, NoticesProvider } from "./context";
import "./scss/App.scss";
import { AppRoutes, PrivateRoute } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Alert, Navigation } from "./components";

function App() {
  return (
    <ErrorHandler>
      <NoticesProvider>
        <Navigation />
        <Alert />
        <Switch>
          {AppRoutes.map((route, item) =>
            route.private ? (
              <PrivateRoute key={item} {...route} />
            ) : (
              <Route key={item} {...route} />
            )
          )}
        </Switch>
      </NoticesProvider>
    </ErrorHandler>
  );
}

export default App;
