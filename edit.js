const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function start(){
const response = await openai.createEdit({
  model: "text-davinci-edit-001",
  input: "how are you",
  instruction: "translate this from english to tamil",
})
console.log(response.data.choices[0].text)
}
start()
;
