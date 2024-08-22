import { IHouse, IHousePageResponse, ISwornMember, IPaginationLinks } from 'app/app/server/house/interfaces';
import { iceAndFireUrls } from './urls';


const parseHeaders = (res: Response)  => {
  const link = res.headers.get("link") as string;
  return link.split(",").reduce((acc: { [key: string]: string }, link) => {
      const props = /^\<(.+)\>; rel="(.+)"$/.exec(link.trim());
      if (!props) {
          console.warn("no match");
          return acc;
      }
      acc[props[2]] = props[1];
      return acc;
  }, {});
}

export const getHouses = async (): Promise<IHouse[]> => {
  try {
    const response = await fetch(`${iceAndFireUrls.houses.all}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data ${error}`);
    return [];
  }

}

export const getHousesByPage = async (page:string): Promise<IHousePageResponse> => {
  try {
    const response = await fetch(`${iceAndFireUrls.houses.all}?page=${page}&pageSize=10`);
    const props = parseHeaders(response) as unknown as IPaginationLinks;
    const data = await response.json();
    const result:IHousePageResponse = {
      houses: data,
      props: props
    }
    return result;
  } catch (error) {
    console.error(`Error fetching data ${error}`);
    return {} as IHousePageResponse;
  }

}

export const getMemberDetail = async (member:string): Promise<ISwornMember> => {
  try {
    const response = await fetch(`${member}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data ${error}`);
    return {} as ISwornMember;
  }

}