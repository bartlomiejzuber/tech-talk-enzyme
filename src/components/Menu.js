import React from 'react';
import { Item } from './Item';

export const Menu = ({ pierogis, orderItems, setOrderItems }) => (
  <section className="menu">
    <h2 className="menu__heading">Menu</h2>

    <div className="menu__items" data-test-id="menu-items">
      {pierogis.map(item => (
        <Item
          key={`${item.id}`}
          item={item}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
      ))}
    </div>
  </section>
);
