import React from 'react';
import style from './AddItem.module.sass';
import TravelingBagLogo from '../TravelingBagLogo';

export const AddItem = () => {
  return (
    <section className={style.newItem}>
      <TravelingBagLogo />
      
      <form className={style.newItem__form}>
        <input
          type="text"
          name="item"
          id="item"
          placeholder='Item name'
          className={style.newItem__form__input}
          required
        />
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder='Quantity'
          min={1}
          className={style.newItem__form__input}
          required
        />
        <button className={style.newItem__form__button}>ADD ITEM</button>
      </form>
    </section>
  )
}
