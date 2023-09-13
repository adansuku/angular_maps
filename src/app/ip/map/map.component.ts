import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() position: any = {}

  label: any = {
    color: 'red',
    text: 'Marcador'
  }

  ngOnInit(): void {
  }
}
