import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditingListingsPageComponent } from './editing-listings-page/editing-listings-page.component';
import { ListingsDetailPageComponent } from './listings-detail-page/listings-detail-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';

const routes: Routes = [
  {path : '',redirectTo: '/listings', pathMatch: 'full'},
  {path : 'listings',component: ListingsPageComponent, pathMatch: 'full'},
  {path : 'listings/:id',component: ListingsDetailPageComponent, pathMatch: 'full'},
  {path : 'contact/:id',component: ContactPageComponent, pathMatch: 'full'},
  {path : 'edit-listing/:id',component: EditingListingsPageComponent, pathMatch: 'full'},
  {path : 'my-listing',component: MyListingsPageComponent, pathMatch: 'full'},
  {path : 'newlisting',component: NewListingsPageComponent, pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
