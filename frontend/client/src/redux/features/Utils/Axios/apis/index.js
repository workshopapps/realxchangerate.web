
import api from "../axios";

class Rates {
  
  constructor(request) {
    this.request = request
  }

  async GetCurrencies(){
    return this.request.get(`/currency/currencies`)
  }

  async GetCurrencyByIP(ip){
    return this.request.get(`/rate/ip/${ip}`)
  }

  async GetCurrencyData(isocode){
    return this.request.get(`/rate/${isocode}`)
  }
}


const RateService = new Rates(api);

export default RateService;
