
import api from "../axios";

class Rates {
  
  constructor(request) {
    this.request = request
  }

  async GetCurrencies(){
    return this.request.get(`/currency/currencies`)
  }
}


const RateService = new Rates(api);

export default RateService;
