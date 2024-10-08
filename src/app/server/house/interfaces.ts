export interface IHouse {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: string[];
  cadetBranches: string[];
  swornMembers: string[];
}

export interface ISwornMember {
  url:         string;
  name:        string;
  gender:      string;
  culture:     string;
  born:        string;
  died:        string;
  titles:      string[];
  aliases:     string[];
  father:      string;
  mother:      string;
  spouse:      string;
  allegiances: string[];
  books:       string[];
  povBooks:    string[];
  tvSeries:    string[];
  playedBy:    string[];
}

export interface IPaginationLinks {
  prev?: string;
  next?: string;
  first: string;
  last: string;
}

export interface IHousePageResponse {
  houses: IHouse[];
  props: IPaginationLinks;
}

export interface IHordeProps {
  params: {
    horde: string;
  },
  searchParams: {
    search?: string;
  }
}