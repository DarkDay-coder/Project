const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app');

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
