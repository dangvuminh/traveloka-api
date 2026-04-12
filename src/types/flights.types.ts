type DateInWeek = "MON" | "TUE" | "WED" | "THURS" | "FRI" | "SAT" | "SUN";

type FlightInput = {
  airlineId: string;
  flightSchedule: DateInWeek;
  flightTime: string;
  numOfEco: number;
  numOfBus: number;
  numOfPre: number;
  numOfFirst: number;
  flyFrom: string;
  flyTo: string;
  fromTime: string;
  toTime: string;
  routeId: string | null;
  order: number | null;
  flightCode: string;
};

export { FlightInput };
