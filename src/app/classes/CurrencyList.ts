import {Currency} from "./Curency";
import { IDataProvider } from "./transport/IDataProvider";

export class CurrencyList {
  private _currencies: Currency[] = [];
  private _name : string;
  private _type : string;
  private _date : string;

  //Get Raw Data from Transport Layer
  constructor(json: any) {


    let data = json;

    this._name = data.table;
    this._type = data.no;
    this._date = data.effectiveDate;

    data.rates.forEach((item: { currency: string; code: string; mid: any; }) =>{
      this._currencies.push(new Currency(item.currency,item.code,item.mid));
    });

  }

  get currencies(): Currency[] {
    return this._currencies;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get date(): string {
    return this._date;
  }
}
