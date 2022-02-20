import {IDataProvider} from "./IDataProvider";
import * as json from '../../../assets/currencies.json';


export  class DataProvider implements IDataProvider{
  fetchCurrentValues(): any {
    let values: any
    values = json;
    return values[0];
  }

  fetchForCurrentDate(date: string): any {
    let values: any
    values = json;
    return values[0];
  }

}
