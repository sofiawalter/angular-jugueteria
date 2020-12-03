import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugueteriaToysComponent } from './jugueteria-toys/jugueteria-toys.component';
import { JuguetesAboutComponent } from './juguetes-about/juguetes-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'juguetes',
    pathMatch: 'full'
  },
  {
    path: 'juguetes',
    component: JugueteriaToysComponent
  },
  {
    path: 'about',
    component: JuguetesAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
