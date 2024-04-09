import express from "express";
import userRouter from "../routes/userRoutes/user.routes";
import postRoutes from "../routes/postRoutes/post.routes"
import { config } from "dotenv";
config({ path: "./server/other/.env"})

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRoutes);

app.listen(PORT, () => {console.log(`listening port ${PORT}`);});
