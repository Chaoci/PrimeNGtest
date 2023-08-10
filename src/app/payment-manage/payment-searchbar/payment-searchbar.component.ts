import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-payment-searchbar',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule
  ],
  templateUrl: './payment-searchbar.component.html',
  styleUrls: ['./payment-searchbar.component.css']
})
export class PaymentSearchbarComponent {
  selection: any | undefined;
  selected: any | undefined;
  number: null | undefined;
  value: any | undefined;
  constructor() {
    this.selection = [
      { name: '當日門診急診', code: 'TD' },
      { name: '昨日門診急診', code: 'YD' },
      { name: '過去門診急診', code: 'PD' },
      { name: '當入住院', code: 'TL' }
    ];
  }

}
