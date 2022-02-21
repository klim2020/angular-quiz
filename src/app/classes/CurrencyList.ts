import {Currency} from "./Curency";
import { IDataProvider } from "./transport/IDataProvider";

export class CurrencyList {
  get length(): number {
    return this._length;
  }
  private _currencies: Currency[] = [];
  private _name : string;
  private _type : string;
  private _date : string;
  private _length:number;

  //Get Raw Data from Transport Layer
  constructor(json: any = false) {

    json.then((val : any)=>{
    console.log("val-  "+val);
    let data = val;
    this._length = 0;
    this._name = (data)?data.table : "dd";
    this._type = (data)?data.no:"";
    this._date = (data)?data.effectiveDate:"";
    if (data) {
      data.rates.forEach((item: { currency: string; code: string; mid: any; }) => {
        this._currencies.push(new Currency(item.currency, item.code, item.mid));
        this._length = this._length+1;
      });
    }else{
      this._currencies =[];
    }

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
