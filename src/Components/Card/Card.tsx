import "./Card.scss"

interface Card{
  bandeiraUrl?: undefined
  namePais:string,
  population: number,
  region: string,
  capital: string

}

const Card = ({bandeiraUrl, namePais, population, region, capital }: Card) => {
  return (
    <>
      <a href={namePais} className="card">
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
      </a>
    </>
  )
}

export default Card
