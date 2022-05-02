import { Component, OnInit } from '@angular/core';
import { District } from '../models/district';
import { DistrictService } from '../service/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  public districts: District[] = []
  constructor(public service: DistrictService) { }

  ngOnInit(): void {
    this.getDistrict();
  }

  public getDistrict(): void {
    this.service.getDistrict().subscribe(
      (response) => {
        this.districts = response
        console.log(response)
      }
    )
  }

}
