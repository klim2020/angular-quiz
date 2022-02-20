import * as moment from 'moment';
import {IDataProvider} from "./IDataProvider";

export class DataProvider implements IDataProvider {
  fetchCurrentValues():any {
    const dataUrl = "";
    return "jhgdhjksdgfjkhb";
  }

  fetchForCurrentDate(date: string = moment(new Date()).format("YYYY-MM-DD")):any {

    return "data service for the current day " + date;

  }
}
