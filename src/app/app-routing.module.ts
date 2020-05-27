import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParliamentariansListingComponent } from './parliamentarians-listing/parliamentarians-listing.component';
import { ParliamentaryDetailsComponent } from './parliamentary-details/parliamentary-details.component';


const routes: Routes = [
  {
    path: '',
    component: ParliamentariansListingComponent
  },
  {
    path: 'details/:short_name',
    component: ParliamentaryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
