import { MagnifyingGlass } from "@phosphor-icons/react";
import "./_App.scss";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";





const App = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const countriesApi = async ()=>{
      const response = await fetch("./assets/json/countries.json")
      const apiData = await response.json()
      setData(apiData)
    }
    countriesApi();
  }, [])
  console.log(data)

  return (
    <div>
      <Header />

      <section className="search_contry">
        <form className="form_search">
          <label htmlFor="search__input">
            <MagnifyingGlass/>
            <input
              autoComplete="off"
              placeholder="Search for a country..."
              id="search"
              type="text"
            />
          </label>
        </form>

       <select className="select__region">
        <option >Filter by Region</option>
        <option >Africa</option>
        <option >America</option>
        <option >Asia</option>
        <option >Europe</option>
        <option >Oceania</option>
       </select>
      </section>

      <main className="countries-card">
        <Card 
        namePais="Afghanistan"
        population={213213}
        region="Asia"
        capital="Kabul"
        />
        
      </main>
    </div>
  );
};

export default App;
