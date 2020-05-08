import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home/Home"));
const ManageListing = lazy(() =>
  import("./components/ManageListing/ManageListing")
);

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manage" component={ManageListing} />
        </Switch>
      </Suspense>
    </main>
  );
}

export default App;
