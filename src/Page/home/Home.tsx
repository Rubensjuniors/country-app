import "./Home.scss";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Select from "../../Components/Select/Select";
import Card from "../../Components/Card/Card";
import Search from "../../Components/Input/Search";



const Home = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState("");


  const countriesApi = async (url: string) => {
    const response = await fetch(url);
    const apiContries = await response.json();
    setData(apiContries);
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
            <Search  setUpdateData={setUpdateData}/>
          </label>
        </form>

        <Select setUpdateData={setUpdateData}/>
      </section>

      <main className="countries-card">
        {data.map((country, index) => {
          return (
              <Card
                key={index}
                bandeiraUrl={country["flags"]["svg"]}
                namePais={country["name"]["common"]}
                flag={country["flag"]}
                population={country["population"]}
                region={country["region"]}
                capital={country["capital"]}
                path={country["name"]["common"]}
              />
          );
        })}
      </main>
    </>
  )
}

export default Home
