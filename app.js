// import data from data.js
const tableData = data;

// Reference html table using d3
var tbody = d3.select("tbody");

// Create table with sightings
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    /* Loop through each object in data and append a row of cells for each*/
    data.forEach((dataRow) => {
        // Append row to table
        let row = tbody.append("tr");

        // Loop through fields in dataRow and add each value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Function to filter data when a click is detected
function handleClick(){
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // If a date was entered, filter the data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Rebuild table with filtered data
    buildTable(filteredData);
}

// Listen for a click, and call handleClick when it happens
d3.selectAll("#filter-btn").on("click", handleClick);

// Populate table with original data on page load
buildTable(tableData);