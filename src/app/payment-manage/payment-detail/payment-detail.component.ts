import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PaymentProfileComponent } from "./payment-profile/payment-profile.component";

@Component({
    selector: 'app-payment-detail',
    standalone: true,
    templateUrl: './payment-detail.component.html',
    styleUrls: ['./payment-detail.component.css'],
    imports: [
        TabMenuModule,
        FormsModule,
        DropdownModule,
        CalendarModule,
        TableModule,
        TabViewModule,
        PaymentProfileComponent
    ]
})

export class PaymentDetailComponent implements OnInit{
  items: MenuItem[]|undefined;
  value:string|undefined;

  selection: any | undefined;
  selected: any | undefined;

  date: Date | undefined = new Date();
  products: any;

  ngOnInit(): void {
  this.items = [
    { label: '醫令收費'},
    { label: '醫令批價'},
  ];

  this.selection = [
    { gender: '男', code: 'TD' },
    { gender: '女', code: 'YD' },
    { gender: '其他', code: 'TL' },
  ];
  this.products = [
    {partially:'0'},

  ]
}

}
