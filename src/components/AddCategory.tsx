import { useState } from 'react';
import { type INewCategory } from '../interfaces';

export const AddCategory: React.FC<INewCategory> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ inputValue });

    const category = inputValue.trim().toLowerCase();
    if (category.length > 1) {
      onNewCategory(category);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
