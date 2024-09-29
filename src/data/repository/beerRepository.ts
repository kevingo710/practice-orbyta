import { AxiosError } from 'axios';

import {
ApiBeer
} from '../sources/remote/api/ApiBeer';
import { ResponseAPIBeer } from '../sources/remote/models/ResponseApiBeer';
import { BeerRepository } from '../../domain/repository/BeerRepository';
import { Beer } from '../../domain/entity/Beer';


export class BeerRepositoryImpl implements BeerRepository {
  async getBeers(): Promise<ResponseAPIBeer | Beer[]> {
    try {
      const response = await ApiBeer.get('');
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.error(JSON.stringify(e.response?.data));
      const apiError: ResponseAPIBeer = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
 
}