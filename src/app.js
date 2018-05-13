const express = require('express');
const bodyParser = require('body-parser');

const expenseRouter = require('./routes/expenseRouter');

let app = express();

// config app
app.set('port', 3000);
app.use(bodyParser.json());


// Define routes
app.use('/expense', expenseRouter);


// Run server
app.listen(app.get('port'), (err) => {
  if(err){
    throw new err({"mesage": `Could not run server on port ${app.get('port')}`});
  }
  console.log(`Running server on port ${app.get('port')}`);
})
