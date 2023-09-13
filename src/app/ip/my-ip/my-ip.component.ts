import { Component } from '@angular/core';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-my-ip',
  templateUrl: './my-ip.component.html',
  styleUrls: ['./my-ip.component.css']
})
export class MyIpComponent {
  data: any;
  position: any = {}

  constructor(private ipService: IpService) { }

  ngOnInit(): void { // Implementa el método ngOnInit aquí
    this.ipService.fetchData().subscribe(
      (response) => {
        this.data = response;
        this.position.lat = response.latitude
        this.position.lng = response.longitude
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
