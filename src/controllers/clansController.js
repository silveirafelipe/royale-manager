const token = require('../auth.json');
const axios = require('axios')

module.exports = {
  async warlog(request, response) {
    const { tag } = request.query;
    const urlToCall = token.url + "/clans/" + tag.replace("#", "%23") + "/warlog";
    
    let jsonWar = await axios.get(urlToCall, {
      headers: {
        'authorization': token.token,
        'Content-Type': 'application/json'
      }
    });

    response.send(jsonWar.data);
  },

  async clanInfo(request, response) {
    const { tag } = request.query;
    const urlToCall = token.url + "/clans/" + tag.replace("#", "%23");
    
    let jsonInfos = await axios.get(urlToCall, {
      headers: {
        'authorization': token.token,
        'Content-Type': 'application/json'
      }
    });

    response.send(jsonInfos.data);
  },

  async currentWar(request, response) {
    const { tag } = request.query;
    const urlToCall = token.url + "/clans/" + tag.replace("#", "%23") + "/currentwar";
    
    let jsonInfos = await axios.get(urlToCall, {
      headers: {
        'authorization': token.token,
        'Content-Type': 'application/json'
      }
    });

    response.send(jsonInfos.data);
  },
}