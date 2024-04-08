import express from "express";
import router from "../routes/user.routes";
import { config } from "dotenv";
config({ path: "./server/other/.env"})

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {console.log(`listening port ${PORT}`);});
