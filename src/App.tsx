import { MagnifyingGlass } from "@phosphor-icons/react";
import "./_App.scss";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Select from "./Components/SelectContinent/Select";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const countriesApi = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const apiData = await response.json();
      setData(apiData);
    };
    countriesApi();
  }, []);
  
  return (
    <div>
      <Header />

      <section className="search_contry">
        <form className="form_search">
          <label htmlFor="search__input">
            <MagnifyingGlass />
            <input
              autoComplete="off"
              placeholder="Search for a country..."
              id="search"
              type="text"
            />
          </label>
        </form>

        <Select />
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
