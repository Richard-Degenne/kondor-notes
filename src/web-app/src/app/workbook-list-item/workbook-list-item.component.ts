import { Component, Input, OnInit } from '@angular/core';
import { Workbook } from '../api/workbook.model';

@Component({
  selector: 'workbook-list-item',
  templateUrl: './workbook-list-item.component.html',
  styleUrls: ['./workbook-list-item.component.sass']
})
export class WorkbookListItemComponent implements OnInit {
  @Input() workbook: Workbook;

  constructor() {
  }

  ngOnInit(): void {
  }

}
