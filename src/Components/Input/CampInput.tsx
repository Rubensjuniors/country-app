

const CampInput = ({updateData}) => {

  
  const typingContry = (event)=>{
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
