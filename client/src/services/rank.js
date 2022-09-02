import axios from "axios";
const baseUrl = "/api/scores";

async function getRank(score) {
  const response = await axios.post(`${baseUrl}/${score}`);
  return response.data;
}

const rankService = { getRank };
export default rankService;
