import "./Select.scss"

const Select = () => {
  return (
    <div>
        <select className="select__region">
        <option >Filter by Region</option>
        <option >Africa</option>
        <option >America</option>
        <option >Asia</option>
        <option >Europe</option>
        <option >Oceania</option>
       </select>
    </div>
  )
}

export default Select
