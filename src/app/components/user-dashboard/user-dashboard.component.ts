import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    d3.select('p').style('color', 'red');

    d3.select('p').append('p').text('Appended paragrah');
    d3.select('p').append('p').text('Appended paragrah');
    d3.select('p').append('p').text('Appended paragrah');

    d3.selectAll('p').style('color', 'blue');
  }
}
