import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkbookListComponent } from './workbook-list/workbook-list.component';
import { WorkbookDetailComponent } from './workbook-detail/workbook-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workbooks', component: WorkbookListComponent },
  { path: 'workbooks/:id', component: WorkbookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
