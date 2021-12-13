import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  // const{    id,   name,   category,   price,   stock,   image  }=items;
  return (
    <section className="flex-row">
      {items?.map((item) => (
        <Item
        {...item}
        key={item.id}
        item={item} />
      ))}
    </section>
  );
};
