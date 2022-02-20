import { Injectable } from '@angular/core';
import { IDataProvider } from '../classes/transport/IDataProvider';
import { DataProvider } from '../classes/transport/mockDataProvider';
import { CurrencyList } from "../classes/CurrencyList";

@Injectable({
  providedIn: 'root'
})
export class BankdataserviceService {
  private dataProvider :  IDataProvider;


  getTodayData():CurrencyList {
    return new CurrencyList(this.dataProvider.fetchCurrentValues());
   }

   getSpecData(date : string):CurrencyList{
     return new CurrencyList(this.dataProvider.fetchForCurrentDate(date));
   }
  constructor() {
    this.dataProvider = new DataProvider();
  }
}
