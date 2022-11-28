import { dispatch } from "../../store";
import { setCurrencyList, setUserIp, setLoading } from "./servicesReducer";
import axios from "axios"
import RateService from "../Utils/Axios/apis";

export const GetUserIp = () => async () => {
    try {
        const res = await axios.get("https://api.ipify.org")

        dispatch(setUserIp(res.data))
        dispatch(setLoading(false))
    } catch (err) {
        console.log(err)
    }
  };

  export const GetCurrencies = () => async () => {
    try {
        const res = await RateService.GetCurrencies()
        dispatch(setCurrencyList(res.data.currencies))
        dispatch(setLoading(false))
    } catch (err) {
        console.log(err)
    }
  };