import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-payment-profile',
  standalone: true,
  imports: [
    TabMenuModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    TableModule,
  ],
  templateUrl: './payment-profile.component.html',
  styleUrls: ['./payment-profile.component.css']
})
export class PaymentProfileComponent {
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
