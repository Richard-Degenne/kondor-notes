import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Workbook } from '../api/workbook.model';

import { WorkbookDetailComponent } from './workbook-detail.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { of } from 'rxjs';

describe('WorkbookDetailComponent', () => {
  let component: WorkbookDetailComponent;
  let fixture: ComponentFixture<WorkbookDetailComponent>;

  let mockActivatedRoute;
  let mockApiService;

  beforeEach(async () => {
    mockActivatedRoute = { snapshot: { params: { id: "42" } } };
    mockApiService = jasmine.createSpyObj(ApiService, ['getWorkbook'])

    await TestBed.configureTestingModule({
      declarations: [ WorkbookDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookDetailComponent);
    component = fixture.componentInstance;

    mockApiService.getWorkbook.and.returnValue(of(
      new Workbook(42, 'Name', 'Description')
    ))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the workbook name', () => {
    let h2 = fixture.nativeElement.querySelector('h2')
    expect(h2.textContent).toBe('Name')
  });

  it('should render the workbook description', () => {
    let caption = fixture.nativeElement.querySelector('caption')
    expect(caption.textContent).toBe('Description')
  })
});
