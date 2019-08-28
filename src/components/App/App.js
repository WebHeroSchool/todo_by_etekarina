import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'Вывести в Footer количество дел';

const App = () => {
  const items = [
    {
      value: 'Вывести в Footer количество дел'
    },
    {
      value: 'Передать три раза в Item разные значения'
    },
    {
      value: 'Прислать ссылку на pull request'
    }
  ];
  
  return (
  <div className={styles.wrap}>
    <h1>My Todo List</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>);
}

export default App;