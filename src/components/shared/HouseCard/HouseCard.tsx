import { IHouse } from 'app/app/server/house/interfaces';
import React from 'react';
import './HouseCard.scss';
import { SwornMember } from '../SwornMember';

export const HouseCard = ({house}:{house:IHouse}) => {
  return (
    <div className="card__container">
      <div className="card__container--title">
        <h1>{house.name}</h1>
      </div>
      <div className="card__container--description">
        { house.swornMembers.length > 0 ? (
        house.swornMembers.map((member:string) => {
          return <SwornMember member={member} key={member} />
        } )
        ) : (<div className="card__empty">
          <h1>
            This house has no sworn members
          </h1>
        </div>
      )}
      </div>
    </div>
  );
}
