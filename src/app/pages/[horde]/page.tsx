import { IHordeProps, IHousePageResponse } from 'app/app/server/house/interfaces';
import { DragonHeader } from 'app/components/home/DragonHeader';
import { DynamicHouses } from 'app/components/home/DynamicHouses';
import { Pagination } from 'app/components/shared/Pagination';
import { getHousesByPage } from 'app/services/iceandfire';
import "./horde.scss";

const Horde = async ( props: IHordeProps) => {
  const response:IHousePageResponse = await getHousesByPage(props.params.horde);


  return (
    <div>
      <h1 className="horde__title">Ice and Fire Houses - Page { props.params.horde}</h1>
      <DragonHeader />
      <DynamicHouses houses={response.houses} />
      <Pagination pagesInfo={response.props}/>
    </div>
  );
}

export default Horde;