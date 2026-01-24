type Gender = "MALE" | "FEMALE";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
};

export { Gender, User };
