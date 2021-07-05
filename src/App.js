import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function PrivateRoute({ children, ...rest }) {
  const accessToken = Cookies.get("accessToken");
  let data = accessToken && jwt_decode(accessToken);
  let name;
  if (data) name = data.name;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
