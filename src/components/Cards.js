import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import EGGIMAGE from '../assets/images/NakedEgg_DSC_5428_H.jpg';
import EGG_IMAGE from '../assets/images/egg_ae_80__2.gif';
import EGG_IMAGE1 from '../assets/images/Eggs-main-alt-min.jpg';
import EGG_IMAGE2 from '../assets/images/EGGS_ERCISE.jpg';
import EGG_IMAGE3 from '../assets/images/EGG_TRAY.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={EGGIMAGE}
              text='THE BEAUTY OF EGG LIES IN THE INSIDE OF IT'
              label='EGGOPEDIA'
              path='/services'
            />
            <CardItem
              src={EGG_IMAGE}
              text='JUST FLATTEN THE WEGG out of you'
              label='GetFit with EGG'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={EGG_IMAGE1}
              text='Meal EGGILICIOUS'
              label='Meal to cheat on'
              path='/services'
            />
            <CardItem
              src={EGG_IMAGE2}
              text='GET your Eggs Rolling '
              label='Let your egg to do it'
              path='/products'
            />
            <CardItem
              src={EGG_IMAGE3}
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
