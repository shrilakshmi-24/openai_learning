const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function start() {
  const response = await openai.retrieveModel("text-davinci-003");
  console.log(response.data)
}
start();
