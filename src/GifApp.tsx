import { useState } from 'react';
import AddCategory from './components/AddCategory';

export function GifApp(): JSX.Element {
  const [categories, setCategories] = useState(['One Punch', 'Deamon Slayer']);

  const onAddCategory = (event: React.MouseEvent) => {
    console.log({event})
    setCategories(['Dragon Ball', ...categories ])
  }

  return (
    <>
      <h1>Hola mundo..</h1>
      <h2>Cruel</h2>

      <AddCategory />
      <ol>
        {categories.map((c) => (
          <li key={ c }>{ c }</li>
        ))}
      </ol>
    </>
  );
}

export default GifApp;
