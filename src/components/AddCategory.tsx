import { useState } from 'react';

export function AddCategory(): JSX.Element {
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmit= (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({event})
    console.log({inputValue})
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;
