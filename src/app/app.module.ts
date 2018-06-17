import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock from 'highcharts/modules/stock.src';


import { AppComponent } from './app.component';
import { HighChartService } from './services/highChart.service';
import { HomeNumbersService } from './services/homeNumbers.service';
import { ProjectsService } from './services/projects.service';
import { TimeTableService } from './services/timeTable.service';
import { googleMapsService } from './services/googleMaps.service';


import { highChartComponent } from './highChart/highChart.component';
import { homeNumbersComponent } from './homeNumbers/homeNumbers.component';
import { projectsComponent } from './projects/projects.component';
import { timeTableComponent } from './timeTable/timeTable.component';
import { speedMeterComponent } from './speedMeter/speedMeter.component';
import { mapComponent } from './map/map.component';
import { tableComponent } from './timeTable/table.component';
import { googleMapComponent } from './map/googleMap.component';


const appRoutes: Routes = [
  // { path: 'table', component: tableComponent },
  { path: 'home', component: googleMapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    mapComponent,
    highChartComponent,
    homeNumbersComponent,
    projectsComponent,
    timeTableComponent,
    speedMeterComponent,
    tableComponent,
    googleMapComponent
  ],
  imports: [AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCLoDOurdai_wkf4ghznuuXMdNHBiRZFBs'
  }),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ChartModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HighChartService, HomeNumbersService, ProjectsService, TimeTableService,googleMapsService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
