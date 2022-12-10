
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

  async ApplyToAdvertise(data){
    return this.request.post(`/online_adverts`, data)
  }

   async GetNews(ip){
    return this.request.get(`/news/${ip}`)
  }
}


const RateService = new Rates(api);

export default RateService;
