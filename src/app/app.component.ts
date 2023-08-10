import { Component, ViewChild } from '@angular/core';
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
  expandView = '';
  isExpand!: boolean;

  @ViewChild('child') childComponent!: SidebarComponent; // 取得子元件實例
  ngAfterViewInit() {
    // 訂閱子元件值的變化
    this.childComponent.isExpandedChange.subscribe((newValue) => {
      // 在這裡處理子元件值的變化
      this.isExpand = newValue;
      this.changeClass();
    });
  }
  changeClass(){
    if(this.isExpand){
      this.expandView = 'expandMyView';
    }else{
      this.expandView = 'collapseMyView';
    }
  }


}
