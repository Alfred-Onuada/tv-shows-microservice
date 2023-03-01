import { Sequelize } from "sequelize";

// setup sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/popular_shows.sqlite'
})

async function setup() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established")
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
}

// Start up the database
(async function () {
  await setup();
})();

export default sequelize;