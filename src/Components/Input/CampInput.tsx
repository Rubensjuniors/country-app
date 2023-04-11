

const CampInput = ({updateData}: any) => {

  
  const typingContry = ({target}: any)=>{
    const nameContry = target.value
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
