import { Component, OnInit } from '@angular/core';
import { IDataProvider } from './classes/transport/IDataProvider';
import {BankdataserviceService} from "./services/bankdataservice.service";
import {CurrencyList} from "./classes/CurrencyList";
import {FilterMatchMode, FilterService, SelectItem} from "primeng/api";
import moment from "moment/moment";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quiz';
  private bankService: BankdataserviceService;
  value: any;
  currencyList!: CurrencyList;
  matchModeOptions!: SelectItem[] ;
  cols: ({ field: string; header: string; } | { field: string; header: string; } | { field: string; header: string; } | { field: string; header: string; })[] | any;
  calendarvalue: any;

  ngOnInit(): void {

    this.currencyList = this.bankService.getTodayData();
    console.log(this.currencyList);


    const customFilterName = "custom-equals";

    this.filterService.register(
      customFilterName,
      (value: { toString: () => any; } | null | undefined, filter: string | null | undefined): boolean => {
        if (filter === undefined || filter === null || filter.trim() === "") {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toString() === filter.toString();
      }
    );

    this.cols = [
      { field: "name", header: "Name" },
      { field: "code", header: "Code" },
      { field: "price", header: "Price to PLN" },
      { field: "vin", header: "Vin" }
    ];

    this.matchModeOptions = [
      { label: "Custom Equals", value: customFilterName },
      { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
      { label: "Contains", value: FilterMatchMode.CONTAINS }
    ];


  }
  constructor(bankdataservice : BankdataserviceService, private filterService: FilterService) {
    this.bankService = bankdataservice;
    this.matchModeOptions = [];

  }

  handleClick($event: any) {
    this.currencyList = this.bankService.getSpecData((moment(this.calendarvalue)).format("YYYY-MM-DD"));
    alert((moment(this.calendarvalue)).format("YYYY-MM-DD"));
  }
}
