import { useState } from "react"
import "./Card.scss"
import { Link } from "react-router-dom"

interface Card{
  bandeiraUrl: string
  namePais:string,
  population: number,
  region: string,
  capital: string

}

const Card = ({bandeiraUrl, namePais, population, region, capital }: Card) => {



  return (
    <>
      <Link to={`/${namePais}`} className="card">
        <figure>
          <img className="card__bandeira" src={bandeiraUrl} alt=""  width={500}/>
        </figure>
        <div className="card__info">
          <h2 className="card__info-title">{namePais}</h2>

          <ul className="card__info-outhers">
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
