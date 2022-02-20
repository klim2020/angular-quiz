import * as moment from 'moment';
import {IDataProvider} from "./IDataProvider";

export class DataProvider implements IDataProvider {
  fetchCurrentValues() {
    const dataUrl = "";
    return "jhgdhjksdgfjkhb";
  }

  fetchForCurrentDate(date: string = moment(new Date()).format("YYYY-MM-DD")) {

    return "data service for the current day " + date;

  }
}
