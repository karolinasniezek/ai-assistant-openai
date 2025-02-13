const PORT = 8000;
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config();

const openai = new OpenAI({ openaiKey: process.env.OPENAI_API_KEY });

app.post("/embedding", async (req, res) => {
  const text = req.body.text;
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
    encoding_format: "float",
  });
  res.send(embedding.data[0].embedding);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
