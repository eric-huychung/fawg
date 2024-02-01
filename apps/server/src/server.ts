import express, { Express, Request, Response , Application } from 'express';
import cors from "cors";
import userRoutes from "./routes/users";
import messageRoutes from "./routes/messages";
// import dotenv from 'dotenv';

//For env File 
// dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// userRoutes
app.use('/users', userRoutes); // This means all routes in userRoutes will have a base path of /users
app.use('/users', messageRoutes);





app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
