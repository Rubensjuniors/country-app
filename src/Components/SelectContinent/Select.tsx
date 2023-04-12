import { HTMLProps, useState } from "react";
import "./Select.scss";

const Select = ({updateData}:  { updateData: (url: string) => void } & HTMLProps<HTMLInputElement>) => {
  const Region = [
    'all',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ]
  const [select, setSelect] = useState(false);
  const [region, setRegion] = useState("")

  

  const selectRegion = ({target}: any)=> {
    const regionText = target.innerText
    if(regionText === 'all'){
      updateData(`https://restcountries.com/v3.1/all`)
    }else{
      updateData(`https://restcountries.com/v3.1/region/${regionText}`)
    }
    setRegion(regionText)
    setSelect(!select)
  }

  return (
    <div className="select__region">
      <button className="select__button" onClick={()=> setSelect(!select)}>{region || 'Filter by Region'}</button>
      {select && (
        <div className="list__region">
          {Region.map(r => <button onClick={selectRegion}>{r}</button>)}
        </div>
      )}
    </div>
  );
};

export default Select;
