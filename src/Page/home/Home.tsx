import "./Home.scss";
import {FormEvent, useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Select from "../../Components/Select/Select";
import Card from "../../Components/Card/Card";
import { Country } from "../../types/types";




const Home = () => {
  const [data, setData] = useState<Country[]>([]);
  const [updateData, setUpdateData] = useState("");
  const [valueInput, setValueInput] = useState("");

  const countriesApi = async (url: string) => {
    const response = await fetch(url);
    const apiContries = await response.json();
    setData(apiContries);
  };

  useEffect(() => {
    countriesApi(updateData || `https://restcountries.com/v3.1/all`);
  }, [updateData]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if(valueInput.length > 0){
      setUpdateData(`https://restcountries.com/v3.1/name/${valueInput}`);
    }else{
      setUpdateData(`https://restcountries.com/v3.1/all`);
    }
  }


  return (
    <>
      <section className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <label className="search__form-input" >
            <MagnifyingGlass />
            <input
              onChange={({target}) => setValueInput(target.value)}
              autoComplete="off"
              placeholder="Search for a country..."
              value={valueInput}
              id="search"
              type="text"
            />
          </label>
        </form>

        <Select setValue={setUpdateData} />
      </section>

      <main className="countries-card">
        {data.map((country, index) => {
          return (
            <Card
              key={index}
              bandeiraUrl={country.flags.svg}
              namePais={country.name.common}
              flag={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              path={country.name.common}
            />
          );
        })}
      </main>
    </>
  );
}


export default Home;
