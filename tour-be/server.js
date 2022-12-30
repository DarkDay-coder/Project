const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app');

// UNHANDLED REJECTION
process.on('unhandledRejection', (err) => {
   console.log(err.name, err.message);
});
console.log(app.get('env'));

// LOCAL DB URL
// const DB = 'mongodb://localhost:27017/Tour-project';
// const DB =
//    'mongodb+srv://sibu:rdsibu@cluster0.muj4e4t.mongodb.net/Tour-project';
mongoose.connect(process.env.DATABASE_LOCAL, (err) => {
   if (err) {
      console.log(err.name, err.message); // display the cause of error for database conenction
      console.error('Error during mongoDB connection');
   } else {
      console.log('MongoDB connected successfully');
   }
});

const port = process.env.PORT || 5000;
app.listen(port, 'localhost', () => {
   console.log(`Server is running using port number: ${port}`);
});

// UNCAUGHT EXCEPTION HANDLING
// process.on('uncaughtException', (err) => {
//    console.log('uncaught exception occur 🤦‍♂️🤦‍♂️');
//    console.log(err.name, err.message);
//    process.exit(1);
// });
