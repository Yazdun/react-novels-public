import { ErrorHandler, NoticesProvider } from "./context";
import "./scss/App.scss";
import { AppRoutes, PrivateRoute } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Alert, Navigation } from "./components";
import { BackToTop } from "./components/";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context";

function App() {
  return (
    <BrowserRouter basename="/index.html">
      <AuthProvider>
        <ErrorHandler>
          <NoticesProvider>
            <Navigation />
            <Alert />
            <BackToTop />
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
