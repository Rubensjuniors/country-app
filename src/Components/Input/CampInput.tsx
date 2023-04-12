import {ChangeEvent, HTMLProps } from "react"


const CampInput = ({updateData}:  { updateData: (url: string) => void } & HTMLProps<HTMLInputElement>) => {

  
  const typingContry = (event: ChangeEvent<HTMLInputElement>)=>{
    const nameContry = event.target.value
    if(nameContry){
      updateData(`https://restcountries.com/v3.1/name/${nameContry}`)
    }else{
      updateData(`https://restcountries.com/v3.1/all`)
    }
  }

  return (
    <>
      <input onChange={typingContry}
              autoComplete="off"
              placeholder="Search for a country..."
              id="search"
              type="text"
            />
    </>
  )
}

export default CampInput
