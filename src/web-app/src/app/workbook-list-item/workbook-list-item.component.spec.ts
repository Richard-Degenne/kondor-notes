import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Workbook } from '../api/workbook.model';

import { WorkbookListItemComponent } from './workbook-list-item.component';

describe('WorkbookListItemComponent', () => {
  let component: WorkbookListItemComponent;
  let fixture: ComponentFixture<WorkbookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbookListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookListItemComponent);
    component = fixture.componentInstance;
    component.workbook = new Workbook(42, 'Name', 'Description')
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
