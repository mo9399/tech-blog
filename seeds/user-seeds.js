const { User } = require("../models");

const userData = [
  {
    username: "mo",
    password: "password123",
  },
  {
    username: "mo1",
    password: "password123",
  },
  {
    username: "mo2",
    password: "password123",
  },
  {
    username: "mo3",
    password: "password123",
  },
  {
    username: "mo4",
    password: "password123",
  },
  {
    username: "mo5",
    password: "password123",
  },
  {
    username: "mo6",
    password: "password123",
  },
  {
    username: "mo7",
    password: "password123",
  },
  {
    username: "mo8",
    password: "password123",
  },
  {
    username: "mo9",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;