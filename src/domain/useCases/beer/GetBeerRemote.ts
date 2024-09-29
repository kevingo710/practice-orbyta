import { BeerRepositoryImpl } from "../../../data/repository/beerRepository";

const { getBeers } = new BeerRepositoryImpl();

export const GetBeerRemoteUseCase = async () => {
  return await getBeers();
};