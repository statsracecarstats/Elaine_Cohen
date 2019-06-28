// set up basic SVG canvase use internet preffered margin set up (i follow the pack)
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;


var canvas = d3.select(".art").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom);

var x = 100;
var y = 200;

var bar1 = canvas.append("rect")
  .attr("x", x)
  .attr("y", y)
  .attr("width", 100)
  .attr("fill", d3.rgb(170, 90, 230))
  .attr("class", "colorbar");

var bar2 = canvas.append("rect")
  .attr("x", x+100)
  .attr("y", y+100)
  .attr("width", 100)
  .attr("fill", d3.rgb(40, 190, 230))
  .attr("class", "colorbar");

var bar3 = canvas.append("rect")
  .attr("x", x)
  .attr("y", y+100)
  .attr("width", 100)
  .attr("fill", d3.rgb(240, 190, 40))
  .attr("class", "colorbar")
  .attr("transform", "rotate (-90)");
