import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifApp: React.FC = () => {
  const [categories, setCategories] = useState(['One Punch', 'Deamon Slayer']);

  const onAddCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <h1>Hola mundo..</h1>
      <h2>Cruel</h2>

      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={capitalize(category)} />
        ))}
      </ol>
    </>
  );
};

export default GifApp;
