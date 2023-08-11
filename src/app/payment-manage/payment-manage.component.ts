import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentSearchbarComponent } from './payment-searchbar/payment-searchbar.component';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-payment-manage',
  standalone: true,
  imports: [
    CommonModule,
    SplitButtonModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    TableModule,
    DropdownModule,
    DialogModule,
    CalendarModule,
    PaymentDetailComponent,
    PaymentSearchbarComponent,
  ],
  templateUrl: './payment-manage.component.html',
  styleUrls: ['./payment-manage.component.css'],
  providers: [MessageService]
})
export class PaymentManageComponent {
  value:string| undefined;
  items: MenuItem[];
  visible: boolean = false;
  date: Date = new Date();
  selection: any| undefined;
  selected: any| undefined;
  products: any[] = [];
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
          { gender: '男', code: 'TD' },
          { gender: '女', code: 'YD' },
          { gender: '其他', code: 'TL' },
        ];
        this.products = [
          {partially:'0'},

        ]

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

    showDialog() {
      this.visible = true;
    }
    closeDialog(){
      this.visible = false;
    }

}
