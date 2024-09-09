// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(salesArray) {
    const sum = salesArray.reduce((sum, num) => sum + num, 0);
    const avg = sum / salesArray.length;
    return avg;
}

const saleNumbers =[5, 35, 40];
console.log("Average Sales Data: $" + calculateAverageSales(saleNumbers)); //Output: Average Sales Data: $26.666666666666668 

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