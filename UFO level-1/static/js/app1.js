
// Set data to variable
var tableData = data;

// Create References select html tags
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Input the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Create Event Listener
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    $tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("No Sightings ... try again");
        }
})
