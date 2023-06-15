import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Workbook } from '../api/workbook.model';
import { WorkbookListComponent } from './workbook-list.component';
import { WorkbookListItemComponent } from '../workbook-list-item/workbook-list-item.component';

describe('WorkbookListComponent', () => {
  let component: WorkbookListComponent;
  let fixture: ComponentFixture<WorkbookListComponent>;

  let mockApiService;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj(ApiService, ['getWorkbooks'])

    await TestBed.configureTestingModule({
      declarations: [ WorkbookListComponent, WorkbookListItemComponent ],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookListComponent);
    component = fixture.componentInstance;

    mockApiService.getWorkbooks.and.returnValue(of([
      new Workbook(42, 'Name', 'Description'),
      new Workbook(43, 'Name', 'Description')
    ]))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a header', () => {
    let h1 = fixture.nativeElement.querySelector('h1')
    expect(h1.textContent).toEqual('Workbooks')
  })

  it('should render WorkbookListItemComponents', () => {
    let listItems = fixture.nativeElement.querySelectorAll('workbook-list-item')
    expect(listItems.length).toBe(2)
  })
});
