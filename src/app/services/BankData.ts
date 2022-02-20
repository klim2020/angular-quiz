import { DateTime } from 'luxon';
import * as moment from 'moment';
export class BankData {
  fetchCurrentValues(){
    const dataUrl = "";
     return "jhgdhjksdgfjkhb";
  }
  fetchForCurrentDate(date : string = moment(new Date()).format("YYYY-MM-DD")){

    return "data service for the current day "+date;

  }
}
