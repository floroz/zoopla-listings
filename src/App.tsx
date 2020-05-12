import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const Home = lazy(() => import("./components/Home/Home"));
const ManageListing = lazy(() =>
  import("./components/ManageListing/ManageListing")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/manage" component={ManageListing} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}

export default App;
