const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:"./config.env"});
const port = process.env.PORT||5000;

// use middleware
app.use(cors());
app.use(express.json());

const con=require('./db/connection');

app.use('/api',require('./routes/route'));


app.get('/', (req, res) => {
  res.send('Server is running ✅');
});


con.then(db=>{
    if(!db)return process.exit(1);

app.listen(port, () => {
  console.log(`Server is running on port:http://localhost:${port}`);
})

app.on('error',err=> console.log(`Failed To Connect with HTTP Server:${err}`));


}).catch(error=>{
    console.log(`Connection Failed...!${error}`);
});

