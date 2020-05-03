import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  dataset: Array<number> = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {
    d3.select('p').style('color', 'red');

    d3.select('p').append('p').text('Appended paragrah');
    d3.select('p').append('p').text('Appended paragrah');
    d3.select('p').append('p').text('Appended paragrah');

    d3.selectAll('p').style('color', 'blue');

    d3.select('h2')
      .selectAll('p')
      .data(this.dataset) //pass data set as an argument
      .enter() //will take the items one by one and perform further operations
      .append('p') //appends paragraph for each data element, each paragraph represents the dataset inside the data
      // .text('D3 is amazing');
      .text(function (item) {
        return item;
      });
  }
}
