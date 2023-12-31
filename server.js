const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');


// Load env vars
dotenv.config({ path: './config/config.env' });

// CONNECT TO DATABASE
connectDB();

// Routes files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser middleware
app.use(express.json());

// app.use(logger);
// Dev loggong Middleware
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 9000;

const server = app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  );

// Handle Unhandled promise rejections
process.on('unhandledRejection', (err, promise)=> {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
})