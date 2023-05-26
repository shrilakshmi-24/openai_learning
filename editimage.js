const { Configuration, OpenAIApi } = require("openai");
const fs=require('fs')
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function start(){
    
    const response = await openai.listFiles();
    
      console.log(response.data.choices[0].text)

}
start()

