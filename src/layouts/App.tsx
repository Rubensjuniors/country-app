import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const App = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
