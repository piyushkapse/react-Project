import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/NakedEgg_DSC_5428_H.jpg'
              text='THE BEAUTY OF EGG LIES IN THE INSIDE OF IT'
              label='EGGOPEDIA'
              path='/services'
            />
            <CardItem
              src='/images/egg_ae_80__2.gif'
              text='JUST FLATTEN THE WEGG out of you'
              label='GetFit with EGG'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Eggs-main-alt-min.jpg'
              text='Meal EGGILICIOUS'
              label='Meal to cheat on'
              path='/services'
            />
            <CardItem
              src='/images/EGGS_ERCISE.jpg'
              text='GET your Eggs Rolling '
              label='Let your egg to do it'
              path='/products'
            />
            <CardItem
              src='/images/EGG_TRAY.jpg'
              text='Let it Rip with your egg at ease'
              label='Adrenaline Rush'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
