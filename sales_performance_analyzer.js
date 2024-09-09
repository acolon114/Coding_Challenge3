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
    return performanceRatingOut;
    }
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