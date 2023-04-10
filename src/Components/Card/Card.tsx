import "./Card.scss"

interface Card{
  bandeiraUrl?: string | number
  namePais:string,
  population: number,
  region: string,
  capital: string

}

const Card = ({bandeiraUrl, namePais, population, region, capital }: Card) => {
  return (
    <>
      <div className="card">
        <figure>
          <img className="card__bandeira" src={`https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg`} alt=""  width={500}/>
        </figure>
        <div className="card__info">
          <h2 className="card__info-title">{namePais}</h2>

          <ul className="card__info-outhers">
            <li><strong>Population:</strong> {population}</li>
            <li><strong>Region:</strong>  {region}</li>
            <li><strong>Capital:</strong>  {capital}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Card
