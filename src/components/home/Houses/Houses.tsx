// "use client"
import { IHouse } from 'app/app/server/house/interfaces';
import React from 'react';
import { HouseCard } from '../../shared/HouseCard';
import './Houses.scss';
import { getHouses } from 'app/services/iceandfire';


export const Houses = async () => {
  const houses = await getHouses();

  return (
    <div className="houses__list-container">
      {houses.map((house: IHouse) => {
        return (
          <HouseCard house={house} key={house.url} />
        );
      } )}
    </div>
  );
}
