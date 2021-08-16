import express, { Request, Response } from 'express';

const port = 3000;
const app = express();

app.get('/', (_req: Request, res: Response): void => {
  res.send(`<h2>Api is up and running on port: ${port}</h2>`);
});

app.listen(port, (): void => {
  console.log(`App listening on port ${port}`);
});

export default app;
