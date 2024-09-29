import axios from "axios"
import { BEER_API_URL } from "./constants"

const ApiBeer = axios.create({
  baseURL: BEER_API_URL,
})

export {
  ApiBeer,
}

