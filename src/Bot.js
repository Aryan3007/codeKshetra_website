import axios from 'axios';

const makeApiRequest = async () => {
  const requestOptions = {
    method: 'POST',
    url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c107a48b3fmsh34c6c0620f1080bp19ac20jsn72f00e5ba0ca',
      'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
    },
    data: {
      messages: [
        {
          role: 'user',
          content: 'what are dark patterns',
        },
      ],
      web_access: false,
      system_prompt: '',
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
    },
  };

  try {
    const response = await axios.request(requestOptions);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

makeApiRequest();
