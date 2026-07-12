const express = require("express");
const cors = require("cors");

const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = 3000;

app.use(cors());

app.use("/", messageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});