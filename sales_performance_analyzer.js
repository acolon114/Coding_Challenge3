// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(salesArray) {
    const sum = salesArray.reduce((sum, num) => sum + num, 0);
    const avg = sum / salesArray.length;
    return avg;
}

const saleNumbers =[5, 35, 40];
console.log("Average Sales Data: $" + calculateAverageSales(saleNumbers)); //Output: Average Sales Data: $26.666666666666668 