import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ProjectsService } from '../services/projects.service';

@Component({
        selector: 'projects',
        templateUrl: './projects.component.html',
        styleUrls: ['./projects.component.scss'],
        providers: [ProjectsService],
})

export class projectsComponent implements OnInit {
        constructor(
            private projectsService : ProjectsService 
        ) { }
    
        myData: any[] = [];

       ngOnInit(){
           this.projectsService.getJSON().subscribe(data => {
               
                console.log(data)
                this.myData = data;
            });
       }
}   