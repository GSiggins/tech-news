const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
  
  const seedDatabase = () => {
    return sequelize.sync({ force: true }).then(() => {
      User.bulkCreate(userData).then(() => {
        Post.bulkCreate(postData).then(() => {
            console.log('All Seeds Planted');
            process.exit(0);
          });
        });
      });
      
  };



seedDatabase();
