import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Zone } from '../models/zone';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  zones: Zone[] = [];
  constructor(public service: ZoneService) { }

  ngOnInit(): void {
    this.getZone();
  }

  public getZone(): void {
    this.service.getZone().subscribe(
      (response) => {
        this.zones = response
      }
    )
  }

}
