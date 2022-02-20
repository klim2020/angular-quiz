import { Component, OnInit } from '@angular/core';
import { BankData } from './services/BankData';
import {BankdataserviceService} from "./services/bankdataservice.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quiz';
  private bankdata : BankData;
  ngOnInit(): void {
    console.log(this.bankdata.fetchForCurrentDate());
  }
  constructor(bankdataservice : BankdataserviceService) {
    this.bankdata = bankdataservice.getData();
  }
}
