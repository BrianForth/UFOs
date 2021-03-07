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