import express from "express";
const app = express();
const PORT = process.env.PORT || 10000;

app.get("/rank", (req, res) => {
  res.send("Diamond 3 - 0RR");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
