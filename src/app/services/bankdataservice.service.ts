import { Injectable } from '@angular/core';
import { IDataProvider } from '../classes/transport/IDataProvider';
//import { DataProvider } from '../classes/transport/mockDataProvider';
import { DataProvider } from '../classes/transport/BankData';
import { CurrencyList } from "../classes/CurrencyList";

@Injectable({
  providedIn: 'root'
})
export class BankdataserviceService {
  private dataProvider :  IDataProvider;


  async getTodayData():Promise<CurrencyList> {

    return new CurrencyList(this.dataProvider.fetchCurrentValues());
   }

   async getSpecData(date : string):Promise<CurrencyList>{
     return new CurrencyList(this.dataProvider.fetchForCurrentDate(date));
   }
  constructor() {
    this.dataProvider = new DataProvider();
  }
}
