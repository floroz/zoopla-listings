import React, { Suspense, lazy } from "react";
import { Switch, Route, Link } from "react-router-dom";
const ManageListing = lazy(() =>
  import("./components/ManageListing/ManageListing")
);

function App() {
  return (
    <main>
      <h1>Zoopla Listing</h1>
      <Link to="/manage">Manage Listing</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/manage" component={ManageListing} />
        </Switch>
      </Suspense>
    </main>
  );
}

export default App;
