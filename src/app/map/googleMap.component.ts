import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { googleMapsService } from '../services/googleMaps.service';

@Component({
    selector: 'google-Map',
    templateUrl: './googleMap.component.html',
    styleUrls: ['googleMap.component.scss'],
    providers: [googleMapsService],
})

export class googleMapComponent {



    constructor(
        private googlemapsService: googleMapsService
    ) { }

    // latitide: number = 51.678418;
    // langtitude: number = 7.809007;
    locationChoosen = true;
    locations: any[] = [];

    ngOnInit() {
        this.googlemapsService.getJSON().subscribe(data => {
            console.log(data)
            this.locations = data;
        });
    }
}   