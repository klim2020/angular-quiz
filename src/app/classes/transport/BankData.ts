import * as moment from 'moment';
import {IDataProvider} from "./IDataProvider";
import axios from "axios";

export class DataProvider implements IDataProvider {
  fetchCurrentValues():any {

    return axios.get("https://api.nbp.pl/api/exchangerates/tables/A/?format=json").then(response => response.data[0])
  }

  fetchForCurrentDate(date: string = moment(new Date()).format("YYYY-MM-DD")):any {

    return axios.get("http://api.nbp.pl/api/exchangerates/tables/A/"+date+"/?format=json").then(response => response.data[0])

  }

}
