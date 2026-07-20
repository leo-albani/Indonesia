export interface TransitSegment {
  route: string;
  flightNo: string;
  company: string;
  date: string;
  dep: string;
  arr: string;
  duration: string;
  note?: string;
  bookedVia?: string;
  bookingNote?: string;
}

export interface HotelInfo {
  name: string;
  area: string;
  checkin: string;
  checkout: string;
  nights: string;
  map?: string;
  extra?: string;
}

export interface Activity {
  name: string;
  blurb: string;
  map: string | null;
  images?: string[];
  facts?: string[];
}

export interface DayItinerary {
  dd: string;
  title: string;
  trailer: string;
  activities: Activity[];
}

export interface SafetyNotice {
  lvl: "info" | "warn" | "critical";
  ico: string;
  t: string;
  b: string;
}

export interface StopItinerary {
  id: number;
  num: string;
  name: string;
  region: string;
  dates: string;
  nights: number;
  accent: "gold" | "coral" | "jungle" | "turquoise";
  isReturn?: boolean;
  arrival?: {
    label: string;
    segments: TransitSegment[];
    footNote?: string;
  };
  hotel?: HotelInfo;
  days?: DayItinerary[];
  tips?: string;
  safety?: SafetyNotice[];
  legOut?: TransitSegment;
  legs?: TransitSegment[];
  transitHotel?: HotelInfo;
}

export interface PackingItem {
  id: string;
  name: string;
}

export interface PackingCategory {
  ico: string;
  title: string;
  items: string[];
}
