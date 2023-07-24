
import React, { Suspense } from 'react';
import { RoutesComponent } from "./components/routes/RoutesComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => (
  <div className="App">
    <img src="/logo192.png" className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RoutesComponent />
    </Suspense>
  );
}

export default App;
