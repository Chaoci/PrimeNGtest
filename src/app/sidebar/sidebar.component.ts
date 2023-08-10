import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // renderer = inject(Renderer2);
  // el = inject(ElementRef);
  containerClass = '';
  ngOnInit() {
    console.log(this.isExpandedIn);
  }

  isExpandedIn = false; // 初始狀態是未展開的
  @Output() isExpandedChange = new EventEmitter<boolean>(); // 輸出事件用於通知父組件值的變化

  toggleExpand() {
    this.isExpandedIn = !this.isExpandedIn;
    this.isExpandedChange.emit(this.isExpandedIn);
    if (this.isExpandedIn) {
      this.containerClass ='containerClass-collapsed';
    }else{
      this.containerClass ='';
    }
  }

    // handleCellClick(event:any) {
    //   // 點擊時添加或移除 .active-cell 類別
    //   if (event.target.classList.contains('active-cell')) {
    //     this.renderer.removeClass(event.target, 'active-cell');
    //   } else {
    //     this.renderer.addClass(event.target, 'active-cell');
    //   }
    // }
  }

