import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: City[] = []
  constructor(public service: CityService) { }

  ngOnInit(): void {
    this.getCity();
  }
  public getCity(): void {
    this.service.getCity().subscribe(
      (response) => {
        this.cities = response
      }
    )
  }

}
