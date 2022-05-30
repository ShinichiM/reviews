const express = require("express");
const sequelize = require("./db/connection");
const app = express();

const PORT = process.env.PORT || 3001;

// User authentication middleware
// --- start
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// --- end

// const sesh = {
//     secret: 'supersecret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
// app.use(session(sesh));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Server instance
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on PORT: ${PORT}`));
});
