import "./_App.scss";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Select from "./Components/SelectContinent/Select";
import CampInput from "./Components/Input/CampInput";

const App = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(null);

  const countriesApi = async (url: any) => {
    const response = await fetch(url);
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    countriesApi(updateData || `https://restcountries.com/v3.1/all`);
  }, [updateData]);
  
  return (
    <div>
      <Header />

      <section className="search_contry">
        <form className="form_search">
          <label htmlFor="search__input">
            <MagnifyingGlass />
            <CampInput  updateData={setUpdateData}/>
          </label>
        </form>

        <Select updateData={setUpdateData}/>
      </section>

      <main className="countries-card">
        {data.map((country) => {
          return (
            <Card
              key={country}
              bandeiraUrl={country["flags"]["svg"]}
              namePais={country["name"]["common"]}
              population={country["population"]}
              region={country["region"]}
              capital={country["capital"]}
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
