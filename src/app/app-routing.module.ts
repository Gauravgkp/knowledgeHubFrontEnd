import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
},
  // {
  //   path:"login",
  //   component:LoginComponent
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
  path: 'result',

  component: ResultsComponent
},
{
  path:'search',

  component: SearchBarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
