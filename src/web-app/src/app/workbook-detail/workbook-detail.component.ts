import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Workbook } from '../api/workbook.model';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'workbook-detail',
  templateUrl: './workbook-detail.component.html',
  styleUrls: ['./workbook-detail.component.sass']
})
export class WorkbookDetailComponent implements OnInit {
  loading: boolean;
  workbook: Workbook;

  constructor(private route: ActivatedRoute, private service: ApiService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true
    const id = this.route.snapshot.params.id
    this.service.getWorkbook(id).subscribe(workbook =>
      this.workbook = workbook
    )
    this.loading = false
  }
}
