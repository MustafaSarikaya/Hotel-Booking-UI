import React, { Suspense } from 'react';
import { RoutesComponent } from "./components/routes/RoutesComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
  const logoPath = import.meta.env.DEV ? '/logo192.png' : `${import.meta.env.VITE_PUBLIC_URL}/logo192.png`;
  return (
    <div className="App">
      <img src={logoPath} className="App-logo" alt="logo" />
      <div>loading...</div>
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RoutesComponent />
    </Suspense>
  );
}

export default App;
