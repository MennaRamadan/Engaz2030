import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeNumbersService } from '../services/homeNumbers.service';

@Component({
    selector: 'home-numbers',
    templateUrl: './homeNumbers.component.html',
    styleUrls: ['./homeNumbers.component.scss'],
    providers: [HomeNumbersService]
})

export class homeNumbersComponent implements OnInit {
    constructor(
        private homeNumbersService: HomeNumbersService
    ) {
            
     }

    myData: any[] = [{title:"",Image:""}];

    ngOnInit() {
        this.homeNumbersService.getJSON().subscribe(data => {
            this.myData = data[0];
            console.log(this.myData);
        });
    }
}   