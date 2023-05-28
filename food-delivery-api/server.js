const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3001;

const db = new sqlite3.Database("database.sqlite", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("Connected to SQLite database");
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS shops (id INTEGER PRIMARY KEY, name TEXT, description TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS goods (id INTEGER PRIMARY KEY, shop_id INTEGER, name TEXT, description TEXT, image TEXT)"
  );
});

app.use(express.static("public"));

app.get("/api/shops", (req, res) => {
  const sql = "SELECT * FROM shops WHERE id IN (1, 2, 3)";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.get("/api/shops/:shopId/goods", (req, res) => {
  const { shopId } = req.params;
  const sql =
    "SELECT id, shop_id, name, description, image FROM goods WHERE shop_id = ?";
  db.all(sql, [shopId], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
