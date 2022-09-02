import axios from "axios";
const baseUrl = "/api/words";

async function getAll(len = 10) {
  const response = await axios.get(`${baseUrl}/${len}`);
  return response.data;
}

const wordsService = { getAll };
export default wordsService;
