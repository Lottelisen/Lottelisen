const Config = require("./config.json");

class API {
  url = Config.BASE_URL;


  async getUrls() {
    const urls = await fetch(Config.PHOTOSURL)
      .then(resp => resp.json());

    return urls;
  }
  
}

export default new API();