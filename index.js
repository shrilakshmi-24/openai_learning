const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// Set your OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the prompt and the examples
const prompt = 'Complete this sentence: "The quick brown fox jumps over the"';
const examples = [
  ['lazy dog.\n', 'The quick brown fox jumps over the lazy dog.'],
  ['moon.\n', 'The quick brown fox jumps over the moon.'],
  ['fence.\n', 'The quick brown fox jumps over the fence.']
];

// Create a new dataset
const openai = new OpenAIApi(configuration);
openai.createDataset({
  name: 'my-dataset'
}).then(response => {
  console.log(response);

  // Add examples to the dataset
  const datasetId = response.id;
  openai.addExamples({
    datasetId: datasetId,
    examples: examples
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
}).catch(error => {
  console.log(error);
});
