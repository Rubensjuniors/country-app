import "./Home.scss";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import CampInput from "../../Components/Input/CampInput";
import Select from "../../Components/SelectContinent/Select";
import Card from "../../Components/Card/Card";



const Home = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState("");

  const countriesApi = async (url: string) => {
    const response = await fetch(url);
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    countriesApi(updateData || `https://restcountries.com/v3.1/all`);
  }, [updateData]);
  
  return (
    <>
      <section className="search">
        <form className="search__form">
          <label className="search__form-input">
            <MagnifyingGlass />
            <CampInput  setUpdateData={setUpdateData}/>
          </label>
        </form>

        <Select setUpdateData={setUpdateData}/>
      </section>

      <main className="countries-card">
        {data.map((country) => {
          return (
            <Card
              key={country["name"]["common"]}
              bandeiraUrl={country["flags"]["svg"]}
              namePais={country["name"]["common"]}
              population={country["population"]}
              region={country["region"]}
              capital={country["capital"]}
            />
          );
        })}
      </main>
    </>
  )
}

export default Home