import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Page/home/Home";
import InfoCard from "../Page/CardInfo/InfoCard";


const App = () => {

  

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/:id" element={<InfoCard />} errorElement={<h1>Pais sem Informação</h1>}/>
        </Routes>
    </Router>
  );
};

export default App;
