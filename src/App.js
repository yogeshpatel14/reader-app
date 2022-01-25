import React, { Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./app/styles/styles.scss";

const Home = React.lazy(() => import("./app/screen/home"));

function App() {
  return (
    <Suspense fallback={<label>Loading...</label>}>
      <div className="App">
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
