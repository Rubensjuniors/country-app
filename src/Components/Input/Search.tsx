import { ChangeEvent, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  setUpdateData: (url: string) => void;
}

const Search = ({ setUpdateData }: InputProps) => {
  const typingContry = (event: ChangeEvent<HTMLInputElement>) => {
    const nameContry = event.target.value;
    if (nameContry) {
      setUpdateData(`https://restcountries.com/v3.1/name/${nameContry}`);
    } else {
      setUpdateData(`https://restcountries.com/v3.1/all`);
    }
  };

  return (
    <>
      <input
        onChange={typingContry}
        autoComplete="off"
        placeholder="Search for a country..."
        id="search"
        type="text"
      />
    </>
  );
};

export default Search;
