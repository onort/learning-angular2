import { Component, Input, Output, EventEmitter, OnChanges } from 'angular2/core';

@Component({
  selector: 'pagination',
  templateUrl: 'app/pagination.component.html'
})
export class PaginationComponent implements OnChanges {
  @Input() items = [];
  @Input('page-size') pageSize = 10; 
  @Output('page-changed') pageChanged = new EventEmitter();
  
  pages: any[];
  currentPage;
  
  constructor() { }
  
  ngOnChanges() {
    this.currentPage = 1;
    var pageCount = this.items.length / this.pageSize;
    this.pages = [];    
    for (var i = 1; i <= pageCount; i++) {
      this.pages.push(i);
    }
  }
  
  changePage(page) {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }
  
  previous() {
    if (this.currentPage == 1) {
      return;
    }
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }
  
  next() {
    if (this.currentPage == this.pages.length) {
      return;
    }
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }

}