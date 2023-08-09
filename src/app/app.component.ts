import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaymentManageComponent } from './payment-manage/payment-manage.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
        CommonModule,
        RouterOutlet,
        ButtonModule,
        MenubarModule,
        SidebarComponent,
        PaymentManageComponent,
        SplitButtonModule,
        FormsModule,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testing';
  value:string|undefined;
    ngOnInit() {

    }




}
