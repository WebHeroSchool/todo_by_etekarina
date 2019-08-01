import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Передать три раза в Item разные значения'} /></li>
    <li><Item todoItem={'Прислать ссылку на pull request'} /></li>
</ul>);

export default ItemList;