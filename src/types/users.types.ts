type Gender = "MALE" | "FEMALE";

type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
};

type AirlineInput = { name: string; code: string; logo: string };

export { Gender, UserInput, AirlineInput };
