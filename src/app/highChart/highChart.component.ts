import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { HighChartService } from '../services/highChart.service';

@Component({
        selector: 'high-Chart',
        templateUrl: './highChart.component.html',
        styleUrls: ['./highChart.component.scss'],
        providers: [HighChartService]
})

export class highChartComponent implements OnInit {
        constructor(
            private highChartService : HighChartService 
        ) { }
    
        myData: any[] = [];

       ngOnInit(){
        //    this.highChartService.getJSON().subscribe(data => {
              
        //         console.log(data)
        //         this.myData = data;
        //     });
       }
}   