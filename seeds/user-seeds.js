const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'bpeterson',
    email: 'bpeterson@email.com',
    password: 'bpeterson'
  },
  {
    username: 'Devenp',
    email: 'Devenpeterson@email.com',
    password: 'Dpeterson'
  },
  {
    username: 'NP123',
    email: 'Natepeterson@gmail.com',
    password: 'Natep'
  }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;