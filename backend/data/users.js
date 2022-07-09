import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    address: "Chile",
    city: "Santiago",
    postalCode: "8320000",
    country: "Region metropolitana",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    address: "Canada",
    city: "Quebec",
    postalCode: "11100",
    country: "Quebec RM",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    address: "Dubai",
    city: "Abudabi",
    postalCode: "12193",
    country: "Abudabi Emiratos arabes",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
