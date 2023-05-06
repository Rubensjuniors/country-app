
import "./Card.scss"
import { Link } from "react-router-dom"

interface Card{
  bandeiraUrl: string
  namePais:string,
  population: number,
  region: string,
  capital: string,
  flag?: string,
  path: string


}

const Card = ({bandeiraUrl, namePais, population, region, capital, flag, path }: Card) => {


  

  return (
    <>
      <Link to={`/${path}`} className="card">
        <figure>
          <img className="card__bandeira" src={bandeiraUrl} alt={namePais}  width={500}/>
        </figure>
        <div className="card__info">
          <h2 className="card__info-title">{namePais} {flag}</h2>

          <ul className="card__info-list">
            <li><strong>Population:</strong> {population}</li>
            <li><strong>Region:</strong>  {region}</li>
            <li><strong>Capital:</strong>  {capital}</li>
          </ul>
        </div>
      </Link>

      
    </>
  )
}

export default Card
