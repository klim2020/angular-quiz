import { Component, OnInit } from '@angular/core';
import { IDataProvider } from './classes/transport/IDataProvider';
import {BankdataserviceService} from "./services/bankdataservice.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quiz';
  private bankService: BankdataserviceService;

  ngOnInit(): void {
    console.log(this.bankService.getTodayData());
  }
  constructor(bankdataservice : BankdataserviceService) {
    this.bankService = bankdataservice;
  }
}
