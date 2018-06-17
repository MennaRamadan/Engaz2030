
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
        selector: 'map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.scss']
})

export class mapComponent implements OnInit {

        // latitide: number;
        // langtitude: number;
        // locationChoosen: boolean;

        ngOnInit(): void {
                // console.log(this.latitide);
                // this.latitide = 51.678418;
                // this.langtitude = 7.809007;
                // this.locationChoosen = false;
        }

        // onChooseLocation(event) {
        //         this.latitide = event.coords.lat;
        //         this.langtitude = event.coords.lng;
        //         this.locationChoosen = true;
        // }
}   