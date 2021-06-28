import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';

import issue from './routes/issue.js';
import project from './routes/project.js';

dotenv.config();
const { PORT: port, MONGODB_URI: uri } = process.env;

const PORT = port || 3000;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

const bd = mongoose.connection;
bd.on('error', console.error.bind(console, 'Mongodb connection failed'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  })
);

[project, issue].forEach(route => {
  app.use('/api', route);
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n\n*** Server running on port ${PORT}\n\n`);
});

export default app;
