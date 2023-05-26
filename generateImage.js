const {Configuration,OpenAIApi} = require('openai');
require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai=new OpenAIApi(configuration)

const port = process.env.PORT || 5000;

app.post('/generateimage',async (req,res)=>{
  try {
    const response=await openai.createImage({
      prompt:req.body.prompt,
      n:1,
      size:'256x256'
    })
    const imageUrl=response.data.data[0].url
    res.status(200).json({success:true,url:imageUrl})
    
  } catch (error) {
    res.status(400).send(error.message)
  }

  
})


app.listen(port, () => console.log(`Server is running on port ${port}!!`));