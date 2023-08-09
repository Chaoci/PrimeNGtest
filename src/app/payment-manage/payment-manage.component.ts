import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';

@Component({
  selector: 'app-payment-manage',
  standalone: true,
  imports: [
    CommonModule,
    SplitButtonModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    PaymentDetailComponent
  ],
  templateUrl: './payment-manage.component.html',
  styleUrls: ['./payment-manage.component.css'],
  providers: [MessageService]
})
export class PaymentManageComponent {
  value:string| undefined;
  items: MenuItem[];
  selection: any | undefined;
  selected: any | undefined;
  number: null | undefined;
    private messageService=inject(MessageService);
    constructor() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
        ];
        this.selection = [
          { name: '當日門診急診', code: 'TD' },
          { name: '昨日門診急診', code: 'YD' },
          { name: '過去門診急診', code: 'PD' },
          { name: '當入住院', code: 'TL' }
      ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: '列印中' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }



}
