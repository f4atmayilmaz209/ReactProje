const express = require('express');
const quoteService = require('./src/services/quoteService');
const cors=require("cors")
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app = express();

// Init connection to MongoDB
dotenv.config();
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        })
    .then(()=>console.log("DB Connection Successfull!"))
    .catch(err=>console.log(err));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/stoic-quote', async (req, res) => {
  try {
    const quotes = await quoteService.getRandomSingleQuote({ category: 'stoic' });
    console.log('Returned quotes', quotes);
    res.json({data:quotes[0]});
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3000,()=>{
    console.log("Backend server is running!")
})



module.exports = app;