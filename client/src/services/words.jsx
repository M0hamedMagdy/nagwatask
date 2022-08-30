import axios from "axios";
const baseUrl = "/api/words/10";
let config;



async function getAll() {
    const response = await axios.get(baseUrl, config);
    return response.data;
  }
  

  
const wordsService = { getAll };
export default wordsService;
