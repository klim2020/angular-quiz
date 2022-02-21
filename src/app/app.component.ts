import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { IDataProvider } from './classes/transport/IDataProvider';
import {BankdataserviceService} from "./services/bankdataservice.service";
import {CurrencyList} from "./classes/CurrencyList";
import {FilterMatchMode, FilterService, SelectItem, SortEvent} from "primeng/api";
import moment from "moment/moment";
import { Table } from 'primeng/table';



import { OverlayContainer} from '@angular/cdk/overlay';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  @ViewChild('dt', { static: true }) dt: Table;
  title = 'quiz';
  private bankService: BankdataserviceService;
  value: any;
  currencyList!: CurrencyList;
  matchModeOptions!: SelectItem[] ;
  cols: ({ field: string; header: string; } | { field: string; header: string; } | { field: string; header: string; } | { field: string; header: string; })[] | any;
  calendarvalue: any;
  theme: any;
  selectedItem : any;

  ngOnInit(): void {
    this.bankService.getTodayData().then( val => this.currencyList = val );

  this.theme = [{name: 'Dark', code: 'NY',val:'thedark.css'},{name: 'Light', code: 'RM', val:'thelight.css'}];
   this.selectedItem = this.theme[0];



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
      { field: "code", header: "Symbol Waluty" },
      { field: "name", header: "Waluta" },
      { field: "price", header: "Kurs Waluty" },
    ];

    this.matchModeOptions = [
      { label: "Custom Equals", value: customFilterName },
      { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
      { label: "Contains", value: FilterMatchMode.CONTAINS }
    ];


  }
  constructor(bankdataservice : BankdataserviceService,
              private filterService: FilterService,
              public overlayContainer: OverlayContainer
              ) {
    this.bankService = bankdataservice;
    this.matchModeOptions = [];
    this.overlayContainer = overlayContainer;

  }

  handleClick($event: any) {

    let ffs= this.bankService.getSpecData((moment(this.calendarvalue)).format("YYYY-MM-DD")).then((val)=>{

      this.currencyList = val;
      console.log("reseting val");
      this.dt.reset();
      this.dt.totalRecords = this.currencyList.length;

      });

  }

  changeTheme($event: any) {
    console.log(this.theme[$event.index].val);
    // @ts-ignore
    var myElement = document.querySelector("#app-theme").href = this.theme[$event.index].val;


    //let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    //themeLink.href = 'thelight.css';

    //this.overlayContainer.getContainerElement().classList.add("light-custom-theme");

  }

  
}
