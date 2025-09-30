const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });


// app.post("/openai", async (req, res) => {
//   try {
//     const { userPrompt } = req.body;

//     const cleanedUserPrompt = userPrompt.replace(/"/g, '\\"');

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         {
//           role: "user",
//           content: `Generate 6 recipes for ${cleanedUserPrompt} dish. Recipes need to contain most of these ingredients. Output should be in JSON array and each object should contain field name named 'name', description field named 'description' and array of step by step instructions. After dot add space. If you don't know the ingredient just generate random dish. Write them in polish language.`,
//         },
//       ],
//     });
//     res.json({
//       completion: completion.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error("Error making API call:", error);
//     res.status(500).json({
//       error: "Error processing the request",
//       message: error.message || "Unknown error occurred",
//     });
//   }
// });


app.get("/dbrecipes", (req, res) => {
  const sql = "SELECT * FROM recipes";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
