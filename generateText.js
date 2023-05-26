const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });


const openai=new OpenAIApi(configuration)
const port = process.env.PORT || 5000;


async function start(req,res){
    const response=await openai.createCompletion({
        model:"text-davinci-003",
        prompt:req.body.prompt,
        temperature:0,
        max_tokens:1000
    })
    console.log(response.data.choices[0].text)
    res.status(200).send(response.data.choices[0].text)
    

}
app.post("/ask", start)
app.listen(port, () => console.log(`Server is running on port ${port}!!`));