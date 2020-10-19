
// Set data to variable
var tableData = data;


// Create References select html tags
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");

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


// Create an Event Listener
// Set up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim();
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
   
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    var filterState = tableData.filter(tableData => tableData.state === inputState);

    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
    // console.log(filterCombinedData)
    // var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity && tableData.state === inputState && tableData.country === inputCountry && tableData.shape === inputShape);
    // var filterCombinedDateState = tableData.filter(tableData => tableData.datetime === inputDate && tableData.state === inputState);

    $tbody.html("");

    let response = {
        filterDate, filterCity, filterCombinedData
    }

    // let response = {
    //     filterDate, filterCity, filterCombinedData, filterState, filterCountry, filterShape
    // }

    // if(response.filterDate.length !== 0) {
    //     addData(filterDate);
    // }

    // Top if only works for filtering the date
    // Need to accommodate for combining multiple filters, needed to create a new var for it
    if(response.filterCombinedData.length !== 0) {
        addData(filterCombinedData);
    }

    // else if(response.filterCity.length !== 0){
    //     addData(filterCity);
    // }
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }

        // else if(response.filterCombinedDateState.length === 0 && ((response.filterDate.length !== 0 || response.filterState.length !== 0))) {
        //     addData(filterDate) || addData(filterState);
        // }

        else {
            $tbody.append("tr").append("td").text("No Sightings .... Try again");
        }
})

