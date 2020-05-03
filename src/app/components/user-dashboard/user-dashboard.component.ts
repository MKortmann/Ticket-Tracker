import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  // dataset: Array<number> = [1, 2, 3, 4, 5];
  // data set for simple bar char
  // dataset2: Array<number> = [80, 100, 56, 120, 180, 30, 40, 120, 160];

  constructor() {}

  ngOnInit(): void {
    //   d3.select('p').style('color', 'red');

    //   d3.select('p').append('p').text('Appended paragrah');
    //   d3.select('p').append('p').text('Appended paragrah');
    //   d3.select('p').append('p').text('Appended paragrah');

    //   d3.selectAll('p').style('color', 'blue');

    // d3.select('.simpleChart')
    //   .selectAll('p')
    //   .data(this.dataset) //pass data set as an argument
    //   .enter() //will take the items one by one and perform further operations
    //   .append('p') //appends paragraph for each data element, each paragraph represents the dataset inside the data
    //   // .text('D3 is amazing');
    //   .text(function (item) {
    //     return item;
    //   });

    // Simple Bar Chart
    // data set for simple bar char
    var dataset: Array<object> = [
      { Month: 'January', Number: 10 },
      { Month: 'February', Number: 3 },
      { Month: 'March', Number: 30 },
      { Month: 'April', Number: 25 },
      { Month: 'Mai', Number: 7 },
    ];

    let colors = d3.scaleOrdinal(d3.schemeCategory10);
    // set paddings
    let padding = { top: 20, right: 30, bottom: 30, left: 50 };
    // select the svg container and set the width and height properties
    let svg = d3.select('svg');
    // defining the char area
    let chartArea = {
      width: parseInt(svg.style('width')) - padding.left - padding.right,
      height: parseInt(svg.style('height')) - padding.top - padding.bottom,
    };

    let yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataset, function (d, i) {
          return d.Number;
        }),
      ])
      .range([chartArea.height, 0])
      .nice();

    let xScale = d3
      .scaleBand()
      .domain(
        dataset.map(function (item) {
          return item.Month;
        })
      )
      .range([0, chartArea.width])
      .padding(0.2);

    // define the start point of the graph, and write the elements passing the xScale
    let xAxis = svg
      .append('g') //g is a group tag to group svg element
      .classed('xAxis', true) //add xAxis class to this group
      .attr(
        'transform',
        'translate(' +
          padding.left +
          ',' +
          (chartArea.height + padding.top) +
          ')'
      )
      .call(d3.axisBottom(xScale));

    // draw the y axis
    let yAxisFn = d3.axisLeft(yScale);
    let yAxis = svg
      .append('g')
      .classed('yAxis', true)
      // x direction move padding.left and y direction from padding.top
      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')');
    yAxisFn(yAxis);

    let rectGrp = svg
      .append('g')
      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')');

    rectGrp
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('width', 37.2) //return the width of each bar
      .attr('height', function (d, i) {
        return chartArea.height - yScale(d.Number);
      })
      .attr('x', function (d, i) {
        return xScale(d.Month); //what is the position of the x axis
      })
      .attr('y', function (d, i) {
        return yScale(d.Number); //what should be the position of y axis
      })
      .attr('fill', function (d, i) {
        // return colors[i];
        return "red";
      });
  }

  //   // we create the barchar
  //   let barChart = svg
  //     .selectAll('rect') //they are rectangles, we select all of them. Since we do not have any rect, the will create one rectangle per data in our dataset.
  //     .data(this.dataset2) //bind the data
  //     .enter() //enter method that take our dataset and perform further operations. The next operations will be operate in each data item.
  //     .append('rect')
  //     // calc the height of each rect
  //     .attr('y', function (d) {
  //       return parseInt(this.svgHeight - d);
  //     })
  //     // set the height
  //     .attr('height', function (d) {
  //       return d;
  //     })
  //     .attr('width', this.barWidth - this.barPadding)
  //     .attr('transform', function (d, i) {
  //       // we have to translate because the bars should start in diff. positions
  //       let translate = [this.barWidth * i, 0];
  //       return 'translate(' + translate + ')';
  //     });
  // }
}
