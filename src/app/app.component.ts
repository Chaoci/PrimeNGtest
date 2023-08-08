import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaymentManageComponent } from './payment-manage/payment-manage.component';

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
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
    ngOnInit() {
        
    }

}
