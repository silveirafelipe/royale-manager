const token = require('../auth.json');
const axios = require('axios')

module.exports = {
  async battles(request, response) {
    const { tag } = request.query;
    const urlToCall = token.url + "/players/" + tag.replace("#", "%23") + "/battlelog";
    
    let jsonBattles = await axios.get(urlToCall, {
      headers: {
        'authorization': token.token,
        'Content-Type': 'application/json'
      }
    });

    response.send(jsonBattles.data);
  },

  async playerInfo(request, response) {
    const { tag } = request.query;
    const urlToCall = token.url + "/players/" + tag.replace("#", "%23");
    
    let jsonInfos = await axios.get(urlToCall, {
      headers: {
        'authorization': token.token,
        'Content-Type': 'application/json'
      }
    });

    response.send(jsonInfos.data);
  }
}