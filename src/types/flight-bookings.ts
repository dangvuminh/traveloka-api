type FlightBookingInput = {
  userId: string;
  flightId: string;
  seatType: SeatType;
  customerName: string;
  passport?: string;
  birthday?: Date;
  date: Date;
};

type SeatType = "ECO" | "PRE" | "BUS" | "FIRST";
