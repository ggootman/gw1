import { Component, OnInit } from '@angular/core';
import { IStation } from './station';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
   valueApi: ValueApi[];
    stationTypeList: StationTypeClass[];
    stationPurposeList: StationPurposeClass[];
    analyteGroupList: AnalyteGroupClass[];

    pageTitle: string = 'Ground Stations Search ';

    showTable: boolean = false; 
    errorMessage: string = ""; 
    urlToGet: string;
    stationIdInput: string = "";
    stationTypeInput: string = "Well";
    stationNameInput: string = "";
    stationPurposeInput: string = "Monitoring";
    analyteGroupInput: string;

  constructor(private http: Http) {
        this.getStationPurpose();
        this.getStationTypes(); 
        this.getAnalyteGroup();
    }

  ngOnInit() {
  }
 resetForm() {

        this.errorMessage = "";
        this.showTable = false;
        this.stationIdInput = "";
        this.stationTypeInput = "";
        this.stationNameInput = "";
        this.stationPurposeInput = "";
        this.analyteGroupInput = "";
    }
       buildUrl(): string {
        var urlBuilder: string = "http://restful-test/api/v1/groundwater/monitoring-stations?";
        if (this.stationIdInput != "") {

            urlBuilder = urlBuilder + "stationId=" + this.stationIdInput + "&";
        }
        if (this.stationTypeInput != "") {

            urlBuilder = urlBuilder + "stationType=" + this.stationTypeInput + "&";
        }
        if (this.analyteGroupInput != "") {

            urlBuilder = urlBuilder + "analyteGroupName=" + this.analyteGroupInput + "&";
        }
        if (this.stationNameInput != "") {

            urlBuilder = urlBuilder + "stationName=" + this.stationNameInput + "&";
        }
        if (this.stationPurposeInput != "") {

            urlBuilder = urlBuilder + "stationPurpose=" + "'" + this.stationPurposeInput + "'&";
        }
        urlBuilder = urlBuilder + 'format=json';
        return urlBuilder;
    }

      getData() {

        this.urlToGet = this.buildUrl();

        this.http.get(this.urlToGet)
            .map((response: Response) => <any>response.json())
            .subscribe(
            data => {
                this.valueApi = data.data;
                this.showTable = true;
                console.log('this.name : ', this.urlToGet);
            },
            err => {
                this.errorMessage = err._body;
            },

        );
        this.errorMessage = this.errorMessage;
    }

     getAnalyteGroup() {

        //�  - groups: Lookup table query: list of analyte groups for EDA monitoring results.

        this.http.get('http://restful-test//api/v1/groundwater/analyte-groups?format=json')
            .map((response: Response) => <any>response.json())
            .subscribe(
            data => {
                this.analyteGroupList = data.data;
                this.showTable = true;
            },
            err => {
                this.errorMessage = err._body;
            },

        );
    }   
     getStationTypes() {

        this.http.get('http://restful-test/api/v1/groundwater/monitoring-stations/types?format=json')
            .map((response: Response) => <any>response.json())
            .subscribe(
            data => {
                this.stationTypeList = data.data;
            },
            err => {
                this.errorMessage = err._body;
            },

        );
    }   

 getStationPurpose() {

        this.http.get('http://restful-test/api/v1/groundwater/monitoring-stations/purposes?format=json')
            .map((response: Response) => <any>response.json())
            .subscribe(
            data => {
                this.stationPurposeList = data.data;
            },
            err => {
                this.errorMessage = err._body;
            },

        );
    }   
 private handleError(error: Response)
    { }

    ngAfterViewInit() {

        setTimeout(() => {
            //document.getElementById('id').focus();

        }, 100);
    }
}
class ValueApi {
    stationId: string;
    stationName: string;
    stationPurpose: string;
    stationType: string;
    countyList: string;
    sampleCount: string;
    cwiUrl: string;
    //geoAreaTypes: string;
} 

class StationTypeClass {
    stationType: string;
}

class StationPurposeClass {
    stationPurpose: string;
}

class AnalyteGroupClass {
    analyteGroupName: string;
}
