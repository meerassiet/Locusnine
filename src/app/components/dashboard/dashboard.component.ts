import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

export interface dashboardDetails {
  id: number;
  SalesRep: string;
  Date: string;
  Client: string;
  PrimaryContactPerson: string;
  Title: string;
  Vertical: string;
  MeetingLocation: string;
  PurposeOfInteraction: string;
  OutcomeAndRemarks: string;
  EngagementStatus: string;
}

const ELEMENT_DATA: dashboardDetails[] = [
  { "id": 1, "SalesRep": "John Doe", "Date": "July 20th,2018", "Client": "Oberio Group of Hotels", "PrimaryContactPerson": "Mahmud Ritelli", "Title": "C level", "Vertical": "Marketing", "MeetingLocation": "Goto Meeting", "PurposeOfInteraction": "Understand their current ecosystem", "OutcomeAndRemarks": "Send first cut of proposed solution", "EngagementStatus": "Needs defined" },
  { "id": 2, "SalesRep": "Ethan Hunt", "Date": "July 20th,2018", "Client": "Taj Group of Hotels", "PrimaryContactPerson": "Avie Peasegood", "Title": "C level", "Vertical": "Sales", "MeetingLocation": "Video", "PurposeOfInteraction": "Demo of the product", "OutcomeAndRemarks": "She will get back with availability for next meeting", "EngagementStatus": "Contact Made" },
  { "id": 3, "SalesRep": "Jane Doe", "Date": "July 20th,2018", "Client": "Accenture", "PrimaryContactPerson": "Dew Tilbey", "Title": "C level", "Vertical": "Senior Management", "MeetingLocation": "Face to Face", "PurposeOfInteraction": "Negotiations", "OutcomeAndRemarks": "He needs to get final approval by the board by EOD", "EngagementStatus": "Negotiations started" },
  { "id": 4, "SalesRep": "Julia Cruise", "Date": "July 20th,2018", "Client": "Google", "PrimaryContactPerson": "Jerri Casswell", "Title": "Sr Manager level", "Vertical": "Technology", "MeetingLocation": "Call", "PurposeOfInteraction": "Introductory call", "OutcomeAndRemarks": "Needs to send them a remainder to fix meeting with Sales Head", "EngagementStatus": "Contact Made" },
  { "id": 5, "SalesRep": "Tom Roberts", "Date": "July 20th,2018", "Client": "Microsoft", "PrimaryContactPerson": "Danney Halms", "Title": "VP level", "Vertical": "Senior Management", "MeetingLocation": "Email", "PurposeOfInteraction": "Confirm final meeting with CEO", "OutcomeAndRemarks": "Meeting confirmed", "EngagementStatus": "Negotiations started" },
  { "id": 6, "SalesRep": "John Doe", "Date": "July 21st,2018", "Client": "Oberio Group of Hotels", "PrimaryContactPerson": "Mahmud Ritelli", "Title": "C level", "Vertical": "Marketing", "MeetingLocation": "Face to Face", "PurposeOfInteraction": "propose our solution", "OutcomeAndRemarks": "Send them an updated proposal", "EngagementStatus": "Needs defined" },
  { "id": 7, "SalesRep": "Ethan Hunt", "Date": "July 21st,2018", "Client": "Taj Group of Hotels", "PrimaryContactPerson": "Avie Peasegood", "Title": "C level", "Vertical": "Sales", "MeetingLocation": "Call", "PurposeOfInteraction": "Fix up next meeting", "OutcomeAndRemarks": "will get back with availability", "EngagementStatus": "Contact Made" },
  { "id": 8, "SalesRep": "Jane Doe", "Date": "July 21st,2018", "Client": "Accenture", "PrimaryContactPerson": "Dew Tilbey", "Title": "C level", "Vertical": "Senior Management", "MeetingLocation": "Face to Face", "PurposeOfInteraction": "Deal signing", "OutcomeAndRemarks": "Deal closed", "EngagementStatus": "Won" },
  { "id": 9, "SalesRep": "Julia Cruise", "Date": "July 21st,2018", "Client": "Google", "PrimaryContactPerson": "Jerri Casswell", "Title": "Sr Manager level", "Vertical": "Technology", "MeetingLocation": "Text", "PurposeOfInteraction": "Fix up meeting with Sales Head", "OutcomeAndRemarks": "Scheduled for next week", "EngagementStatus": "Contact Made" }, 
  { "id": 10, "SalesRep": "Tom Roberts", "Date": "July 21st,2018", "Client": "Microsoft", "PrimaryContactPerson": "", "Title": "VP level", "Vertical": "Senior Management", "MeetingLocation": "Face to Face", "PurposeOfInteraction": "Final negotiation", "OutcomeAndRemarks": "Deal lost", "EngagementStatus": "Lost" }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['SalesRep', 'Date', 'Client', 'PrimaryContactPerson', 'Title', 'Vertical', 'MeetingLocation', 'PurposeOfInteraction', 'OutcomeAndRemarks', 'EngagementStatus'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  sortDivReverse() {
    var toSortR = document.getElementById('list1').children;
    toSortR = Array.prototype.slice.call(toSortR, 0);
    toSortR = _.orderBy(toSortR, ['id'], ['desc']);
    var parent = document.getElementById('list1');
    parent.innerHTML = "";
    for (var i = 0, l = toSortR.length; i < l; i++) {
      parent.appendChild(toSortR[i]);
    }

    var toSortL = document.getElementById('list2').children;
    toSortL = Array.prototype.slice.call(toSortL, 0);
    toSortL = _.orderBy(toSortL, ['id'], ['desc']);
    var parent = document.getElementById('list2');
    parent.innerHTML = "";
    for (var i = 0, l = toSortL.length; i < l; i++) {
      parent.appendChild(toSortL[i]);
    }

  }

  sortDiv() {
    var toSortR = document.getElementById('list1').children;
    toSortR = Array.prototype.slice.call(toSortR, 0);
    toSortR = _.orderBy(toSortR, ['id'], ['asc']);
    var parent = document.getElementById('list1');
    parent.innerHTML = "";
    for (var i = 0, l = toSortR.length; i < l; i++) {
      parent.appendChild(toSortR[i]);
    }

    var toSortL = document.getElementById('list2').children;
    toSortL = Array.prototype.slice.call(toSortL, 0);
    toSortL = _.orderBy(toSortL, ['id'], ['asc']);
    var parent = document.getElementById('list2');
    parent.innerHTML = "";
    for (var i = 0, l = toSortL.length; i < l; i++) {
      parent.appendChild(toSortL[i]);
    }
  }

}
