import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Workbook } from '../api/workbook.model';

@Component({
  selector: 'app-workbook-list',
  templateUrl: './workbook-list.component.html',
  styleUrls: ['./workbook-list.component.sass']
})
export class WorkbookListComponent implements OnInit {
  loading: boolean;
  workbooks: Workbook[];

  constructor(private service: ApiService) {
    this.loading = false;
    this.workbooks = []
  }

  ngOnInit(): void {
    this.loading = true;
    this.service.getWorkbooks().subscribe(workbooks => {
       this.workbooks = workbooks
    })
    this.loading = false;
  }

}
