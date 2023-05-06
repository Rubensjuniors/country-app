import "./ContryInfo.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../../types/types";
import Button from "../../Components/Button/Button";

interface infoContry extends Country {
  cca2: string;
  subregion: string;
  currencies: { EUR: { name: string; symbol: string } };
  languages: { spa: string };
  borders: Array<String>;
}

const InfoCard = () => {
  const { id } = useParams();
  const [contry, setContry] = useState<infoContry[]>([]);

  useEffect(() => {
    const contryApi = async () => {
      const reponse = await fetch(`https://restcountries.com/v3.1/name/${id}`);
      const dataContry = await reponse.json();
      setContry(dataContry);
    };
    contryApi();
  }, [contry]);

  return (
    <>
      <main className="contry">
        <Button path="/" icon={true} className="large">
          Back
        </Button>

        {contry &&
          contry.map(
            ({
              flags,
              name,
              population,
              region,
              subregion,
              capital,
              cca2,
              currencies,
              languages,
              borders,
            }) => {
              return (
                <div className="crontry__info">
                  <figure className="contry__info-img">
                    <img src={flags.svg} alt={name.common} />
                  </figure>

                  <h1 className="crontry__info-name">{name.common}</h1>

                  <div className="contry__info-lists">
                    <ul className="contry__info-list">
                      <li>
                        <strong>Populatio:</strong>
                        {population}
                      </li>
                      <li>
                        <strong>Region:</strong>
                        {region}
                      </li>
                      <li>
                        <strong>Subregion:</strong>
                        {subregion}
                      </li>
                      <li>
                        <strong>Capital:</strong>
                        {capital}
                      </li>
                    </ul>

                    <ul className="contry__info-list">
                      <li>
                        <strong>Top Level Domain:</strong>
                        {cca2}
                      </li>
                      <li>
                        <strong>Currencies:</strong>
                        {currencies.EUR?.name}
                      </li>
                      <li>
                        <strong>Languages:</strong>
                        {languages.spa}
                      </li>
                    </ul>
                  </div>

                  <ul className="contry__info-list-contries">
                    <h3>Border Contries:</h3>
                    <li>
                      {borders.map((contries, index) => {
                        return (
                          <Button
                            key={index}
                            path=""
                            icon={false}
                            className="small"
                          >
                            {`${contries}`}
                          </Button>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              );
            }
          )}
      </main>
    </>
  );
};

export default InfoCard;
