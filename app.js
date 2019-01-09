const express = require('express');
const app = express();
const port = 3000;
const { Client } = require('pg');

let query = 'SELECT * from posts';
let host = process.env.db_host || 'localhost';

app.get('/', async (req, res) => {
  try {
    const client = new Client({
      host,
      user: 'postgres'
    });
    await client.connect();
    const posts = await client.query(query);
    res.status(200).json({ posts: posts.rows });
  } catch (error) {
    res
      .status(400)
      .json({ data: { error: 'something went wrong' }, success: false });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
