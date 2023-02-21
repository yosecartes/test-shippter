import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShipsComponent } from './list-ships/list-ships.component';

const appRoutes: Routes = [
  { path: 'embarcaciones', component: ListShipsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
