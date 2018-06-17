// import {Component, OnInit} from '@angular/core';
// import { HttpClient } from '@angular/common/http'; 
// import { Observable } from 'rxjs';

// @Component({
//         templateUrl: './table.component.html'
// })

// export class tableComponent{

// }   

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTableService } from 'src/app/services/timeTable.service';

@Component({
        templateUrl: './table.component.html'
})

export class tableComponent implements OnInit {
        constructor(
                private timeTableService: TimeTableService) { }

        myData: any[] = [];

        ngOnInit() {
                this.timeTableService.getJSON().subscribe(data => {
                        
                        console.log(data)
                        this.myData = data;
                });
        }
}   