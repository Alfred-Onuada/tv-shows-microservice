import express from "express";
import cors from 'cors';
import sequelize from "./config/db.config";
import Show from "./models/show.model";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// sync all db tables
sequelize.sync();

// route for getting shows
app.get('/', async (req, res) => {
  let { page }:{ page?: number } = req.query;

  const maxPerPage = 5;
  const maxPage = ((await Show.count()) / maxPerPage) - 1;
  try {
    if (typeof page === 'undefined' || page <= 0) {
      page = 1;
    }

    if (page > maxPage) {
      page = maxPage;
    }

    const shows = await Show.findAll({
      offset: (page - 1) * maxPerPage,
      limit: maxPerPage
    })
    
    if (shows.length === 0) {
      res.status(404).json({ message: "No shows found in the database" })
      return;
    }

    res.status(200).json({ shows: shows, page: +page, total_pages: maxPage, message: "Shows retrieved successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured on the server, please try again" });
    return;
  }
})

app.get('*', (req, res) => {
  res.status(404).json({ message: "Oops, you look a little lost there chief" });
})

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Popular TV Shows service is now live at http://localhost:${PORT}`)
})