import {IDataProvider} from "./IDataProvider";
import * as json from '../../../assets/currencies.json';
import * as json_old from '../../../assets/currencies_old.json';

export  class DataProvider implements IDataProvider{
  fetchCurrentValues(): any {
    let values: any
    values = json;
    return values[0];
  }

  fetchForCurrentDate(date: string): any {
    let values: any
    values = json_old;
    return values[0];
  }

}
