import { IHouse } from 'app/app/server/house/interfaces';
import { HouseCard } from '../../shared/HouseCard';
import './Houses.scss';
import { getHouses } from 'app/services/iceandfire';
import Link from 'next/link';


export const Houses = async () => {
  const houses = await getHouses();

  return (
    <div>
      <Link className="underline text-blue-700" href="/pages/page" as="/pages/1">Go to the version that includes pagination </Link>
      <div className="houses__list-container">
        {houses.map((house: IHouse) => {
          return (
            <HouseCard house={house} key={house.url} />
          );
        })}

      </div>
    </div>
  );
}
