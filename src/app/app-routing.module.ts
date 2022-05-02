import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { DistrictComponent } from './district/district.component';
import { StateItemComponent } from './state/state-item/state-item.component';
import { StateComponent } from './state/state.component';
import { TodoComponent } from './todo/todo.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent },
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'state', component: StateComponent},
  {path: 'state/:actions', component: StateItemComponent},
  {path: 'zone', component: ZoneComponent},
  {path: 'district', component: DistrictComponent},
  {path: 'city', component: CityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
