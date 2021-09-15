import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
const PORT = 3333;

app.use(express.json());

/**
 * Not to be repetitive, just once the route you want to access.
 * So, just declare the path that will be accessed in "routes"
 */
app.use('/categories', categoriesRoutes);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}!`));
