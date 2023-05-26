// const { Configuration, OpenAIApi } = require("openai");
// require("dotenv").config();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// async function start(){
// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{role: "user", content: "you are soo kind"}],
// });
// console.log(completion.data.choices[0].message);
// }
// start()

const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const prompt = "Which of these is a type of fruit?";
const examples = [
  ["apple", "fruit"],
  ["carrot", "vegetable"],
  ["banana", "fruit"],
];

openai.createClassification({
  model: "text-davinci-002",
  query: prompt,
  examples: examples,
}).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});
