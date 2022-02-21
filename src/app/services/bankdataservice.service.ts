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
  errorPane: boolean = false;


  async getTodayData():Promise<CurrencyList> {

    return new CurrencyList(this.dataProvider.fetchCurrentValues());
   }

   async getSpecData(date : string):Promise<CurrencyList>{
      let res = this.dataProvider.fetchForCurrentDate(date)
          .catch(()=>{
            console.log("error");
            this.errorPane = true;
          })
     return new CurrencyList(res);
   }
  constructor() {
    this.dataProvider = new DataProvider();
  }
}
