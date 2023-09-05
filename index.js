const { Configuration, OpenAIApi } = require('openai');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('tanya: ', function (text) {
  new OpenAIApi(new Configuration({
    apiKey: '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',
  })).createCompletion({
    model: 'text-davinci-003',
    prompt: text,
    max_tokens: 500,
  }).then(function (response) {
    console.log('balas: ', response.data.choices[0].text);
    readline.close();
  });
});