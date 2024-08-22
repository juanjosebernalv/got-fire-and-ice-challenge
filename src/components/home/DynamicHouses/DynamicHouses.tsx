// "use client"
import { IHouse } from 'app/app/server/house/interfaces';
import { HouseCard } from '../../shared/HouseCard';
import './DynamicHouses.scss';


export const DynamicHouses = ({houses}:{houses:IHouse[]}) => {

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
