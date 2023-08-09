import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-payment-detail',
  standalone: true,
  imports: [
    TabMenuModule,
  ],
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit{
  items: MenuItem[]|undefined;
  ngOnInit(): void {
    this.items = [
      { label: '醫令收費'},
      { label: '醫令批價'},
  ];
  }
}
