// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(salesArray) {
    const sum = salesArray.reduce((sum, num) => sum + num, 0);
    const avg = sum / salesArray.length;
    return avg;
}

const saleNumbers =[5, 35, 40];
console.log("Average Sales Data: $" + calculateAverageSales(saleNumbers).toFixed(2)); //Output: Average Sales Data: $26.67 

// Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating(avgSales) {
    let performanceRatingOut;
    if (avgSales > 10000) {
        performanceRatingOut = "Excellent"; // Output: If average sales are > $10,000 then the rating is excellent
    } else if (avgSales >= 7000) {
        performanceRatingOut = "Good"; // Output: If average sales are < or = $7,000 then the rating is good
    } else if (avgSales >= 4000) {
        performanceRatingOut = "Satisfactory"; // Output: If average sales are > or = $4,000 then the rating is satisfactory
    } else if (avgSales>= 0) {
        performanceRatingOut = "Needs Improvement"; // Output: If average sales are > or = $0 then the rating needs improvement
    } else { // Error handling for negative values
        performanceRatingOut = "Invalid data"; // Output: If average sales are negative then the data is invalid
    }
    return performanceRatingOut;
}

//Task 3: Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesPeople) {
    const topPerf =
    salesPeople.reduce((top, curr) => curr.totalSales > top.totalSales ?
    curr: top, salesPeople[0]); // This function allows the program to identify the top performer

    const bottomPerf =
    salesPeople.reduce((bottom, curr) => curr.totalSales < bottom.totalSales ?
    curr: bottom, salesPeople[0]); // This function allows the program to indenify the bottom performer

    const performers =
    {topPerformer: topPerf, 
        bottomPerformer: bottomPerf
    };
    return performers;
}

let salesPeople = [
    {name: "Alicia", totalSales: 6000},
    {name: "Joe", totalSales: 10000},
    {name: "Dave", totalSales: 15000},
    {name: "Greg", totalSales: 13000}
]; //This is an array of different objects representing sales people and their total sales

// Task 4: Combine Functions to Generate a Performance Report

const salesData = [

    {name: "Alice", sales: [12000, 15000, 13000] },
    {name: "Bob", sales: [7000, 6000, 7500] },
    {name: 'Charlie', sales: [3000, 4000, 3500] },
    {name: 'Diana', sales: [9000, 8500, 9200] },
  ];

function printData(salesPerson){
 console.log("Name: " + salesPerson.name + " | Average Sales: $ " + salesPerson.avgSales.toFixed(2) + " | Rating: " + salesPerson.rating); // Output: Name: (Sales Person Name) | Average Sales: $ (Averages Sales) | Rating: (Rating of Sales Person Based off Total Sales)
}

function generatePerformanceReport(salesData) {
salesData.forEach((curr) => curr.avgSales = calculateAverageSales(curr.sales)); // Output: This line loops through each of the data running previous functions to calculate the average sales
salesData.forEach((curr) => curr.rating = determinePerformanceRating(curr.avgSales)); // Output: Ths line loops through each of the data running previous functions to determine the performance rating based of the average sales of the sales person
salesData.forEach((curr) => curr.totalSales = curr.sales.reduce((sum, num) => sum + num, 0)); // Output: This line loops through each of the data running functions to adding all the sales per sales person and assigning them to each sales person's total sales
let performers = findTopAndBottomPerformers( salesData );// Output: This line find the top and bottom performers

salesData.forEach((curr) => printData(curr));
console.log("Top Performer: " + performers.topPerformer.name);// Output: Top Performer: Alice
console.log("Bottom Performer: " + performers.bottomPerformer.name); //Output: Bottom Performer: Charlie
}
generatePerformanceReport(salesData);
