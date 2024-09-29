import { ResponseAPIBeer } from "../../data/sources/remote/models/ResponseApiBeer";
import { Beer } from "../entity/Beer";

export interface BeerRepository {
  getBeers(): Promise<ResponseAPIBeer | Beer[]>;
}