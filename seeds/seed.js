const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  for (const post of postData) {
    await Post.create({
      ...post,
    });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
  }

  process.exit(0);
};

seedDatabase();
