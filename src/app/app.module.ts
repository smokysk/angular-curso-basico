import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { StateComponent } from './state/state.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneComponent } from './zone/zone.component';
import { CityComponent } from './city/city.component';
import { DistrictComponent } from './district/district.component';
import { StateItemComponent } from './state/state-item/state-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CurriculumComponent,
    StateComponent,
    ZoneComponent,
    CityComponent,
    DistrictComponent,
    StateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
