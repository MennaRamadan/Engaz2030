import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTableService } from 'src/app/services/timeTable.service';

@Component({
    selector: 'time-table',
    templateUrl: './timeTable.component.html',
    styleUrls: ['./timeTable.component.scss']
})

export class timeTableComponent {
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
