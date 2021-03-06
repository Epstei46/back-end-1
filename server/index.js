const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

/* below can be accessed through  http://localhost:4000/weather/hot or  http://localhost:4000/weather/cold */
app.get("/weather/:temperature", (req, res) => {
    // const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    const {temperature} = req.params; /* object destructuring to increase readability */
    const phrase = `<h3>It was ${temperature} today</h3>`
    res.status(200).send(phrase);
});




app.listen(4000, () => console.log("Server is running on port 4000"));