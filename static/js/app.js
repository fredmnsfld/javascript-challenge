//write code that appends a table to your web page and then adds new rows of data for each UFO sighting
// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

console.log(data);

data.forEach(UFO => {
    let row = tbody.append("tr")
    Object.values(UFO).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    })
})
// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(weatherReport => {
//   let row = tbody.append("tr");
//   Object.values(weatherReport).forEach(value => {
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
let button = d3.select("#filter table"),
let inputfile = d3.select("#form");
