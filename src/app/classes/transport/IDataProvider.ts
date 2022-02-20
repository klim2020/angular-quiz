export interface IDataProvider {

}
export interface IDataProvider {

  //Return Currency Values for Current Date
  fetchCurrentValues(): string;

  //Return Values for Specified date
  fetchForCurrentDate(date: string): string;
}
