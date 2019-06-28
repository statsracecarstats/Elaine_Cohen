// set up basic SVG canvase use internet preffered margin set up (i follow the pack)
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;


var canvas = d3.select(".art").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom);

var bar1 = canvas.append("rect")
  .attr("x", 40)
  .attr("y", 200)
  .attr("width", 100)
  .attr("fill", d3.rgb(170, 90, 230))
  .attr("class", "colorbar");
