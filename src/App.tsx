import { Outlet } from "react-router-dom";
import "./_App.scss";

import Header from "./Components/Header/Header";


const App = () => {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
