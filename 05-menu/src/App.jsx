import { useState } from 'react';
import menu from './data';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import Categories from './components/Categories/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
