export class NuovoPokemonCatturatoDTO {
  constructor(public pokemon: Pokemon, public userId: number) {}
}

export type PokemonCatturato = {
  id: number;
  userId: number;
  pokemon: Pokemon;
};

export interface SearchCardsResponse {
  data: Pokemon[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface CardResponse {
  data: Pokemon;
}

export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom?: string;
  attacks?: Attack[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: Set;
  number: string;
  artist: string;
  rarity?: string;
  flavorText?: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities2;
  images: Images2;
  tcgplayer?: Tcgplayer;
  cardmarket?: Cardmarket;
  evolvesTo?: string[];
  level?: string;
  abilities?: Ability[];
  rules?: string[];
  regulationMark?: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode?: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

export interface Legalities {
  unlimited: string;
  expanded?: string;
}

export interface Images {
  symbol: string;
  logo: string;
}

export interface Legalities2 {
  unlimited: string;
  expanded?: string;
}

export interface Images2 {
  small: string;
  large: string;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices?: Prices;
}

export interface Prices {
  holofoil?: Holofoil;
  reverseHolofoil?: ReverseHolofoil;
  normal?: Normal;
  '1stEditionHolofoil'?: N1stEditionHolofoil;
  unlimitedHolofoil?: UnlimitedHolofoil;
}

export interface Holofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: number;
}

export interface ReverseHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: number;
}

export interface Normal {
  low: number;
  mid: number;
  high: number;
  market?: number;
  directLow?: number;
}

export interface N1stEditionHolofoil {
  low: number;
  mid: number;
  high: number;
  market?: number;
  directLow?: number;
}

export interface UnlimitedHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: number;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Prices2;
}

export interface Prices2 {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}
