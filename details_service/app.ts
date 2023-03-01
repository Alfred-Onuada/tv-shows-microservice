import express from "express";
import cors from 'cors';
import db from "./config/db.config";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  const { name }: { name?: string } = req.query;

  try {
    if (typeof name === 'undefined') {
      res.status(400).json({ message: "Invalid request, Please specify the name of the movie in the 'name' parameter" })
      return;
    }

    // the collation part makes the query case insensitive (check collation docs mongodb)
    const show = await db.collection('show_details').findOne({ name: name }, { collation: { locale: 'en', strength: 2 } });

    if (show === null) {
      res.status(404).json({ message: "Oops, we currently do not have details about that movie" });
      return;
    }

    res.status(200).json({ details: show, message: "Show details retrieved successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured on the server, please try again" })
  }
})

app.get('*', (req, res) => {
  res.status(404).json({ message: "Oops, you look a little lost there chief" });
});

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Details service is live at http://localhost:${PORT}`)
})