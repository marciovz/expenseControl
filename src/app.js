const express = require('express');
const app = express();

app.set('port', 3000);

app.listen(app.get('port'), (err) => {
  if(err){
    throw new err({"mesage": `Could not run server on port ${app.get('port')}`});
  }
  console.log(`Running server on port ${app.get('port')}`);
})
