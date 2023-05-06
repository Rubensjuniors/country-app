import { HTMLProps, useState } from "react";
import "./Select.scss";

interface selectProps extends HTMLProps<HTMLInputElement>{
  setValue: (url: string) => void 
}

const Select = ({setValue}:  selectProps) => {
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
      setValue(`https://restcountries.com/v3.1/all`)
    }else{
      setValue(`https://restcountries.com/v3.1/region/${regionText}`)
    }
    setRegion(regionText)
    setSelect(!select)
  }

  return (
    <div className="select">
      <button className="select__button" onClick={()=> setSelect(!select)}>{region || 'Filter by Region'}</button>
      {select && (
        <div className="select__list-region">
          {Region.map(r => <button key={r} onClick={selectRegion}>{r}</button>)}
        </div>
      )}
    </div>
  );
};

export default Select;
