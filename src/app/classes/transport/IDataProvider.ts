export interface IDataProvider {

}
export interface IDataProvider {

  //Return Currency Values for Current Date
  fetchCurrentValues(): any;

  //Return Values for Specified date
  fetchForCurrentDate(date: string): any;
}
