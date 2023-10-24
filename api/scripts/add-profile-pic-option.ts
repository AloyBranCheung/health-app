const axios = require("axios");
const prompter = require("prompt");

prompter.start();

async function addSinglePic() {
  const { url } = prompter.get(["url"]);
  await axios.post("http://localhost:3001/api/profilepics", { url });
}

addSinglePic();
