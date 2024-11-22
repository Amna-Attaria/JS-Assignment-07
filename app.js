// Qno:01
// var date = new Date();
// document.write(date)

// Qno:02
// var date = new Date();
// var monthIndex = date.getMonth(); // Get the current month index (0-11)

// // Array of month names
// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// // Get the month name based on the month index
// var monthName = monthNames[monthIndex];

// document.write("Current month: " + monthName);

// Qno:03
// var date = new Date();
// var dayIndex = date.getDay()
// var week = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
// var weekName = week[dayIndex];
// document.write("Current Day is: " + weekName);
// Qno:04
// var date = new Date();
// var dayIndex = date.getDay()
// if(dayIndex==0&&6)
// {
//     document.write("Its Funday")
// }
// else{
//     document.write("Its Working day")
// }
// Qno:05
// var date = new Date()
// var day = date.getDate()
// if(day <= 15)
// {
//     document.write("First Fifteen Days of the Month days of the month")
// }
// else
// {
//     document.write("Last days of the month")
// }
// Qno:06
// var dateObj = new Date();
// minutesSince1970 = Math.floor(dateObj.getTime() / 60000);

// document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);
// Qno:07
// const currentHour = new Date().getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }
// Qno:08
// const laterDate = new Date(2020, 11, 31);
// document.write("Later Date: ", laterDate);
// Qno:09
// const ramadanStart = new Date(2015, 5, 18);
// const currentDate = new Date();
// // Calculate the difference in time between the two dates (in milliseconds)
// const timeDifference = currentDate - ramadanStart;
// // Convert time difference from milliseconds to days
// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan 2015 : " + daysPassed);
//  Qno:10
// const referenceDate = new Date();
// const targetDate = new Date(2015, 11, 5, 0, 0, 0);
// const timeDifference = referenceDate - targetDate;
// const secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds elapsed since December 5, 2015: " + secondsElapsed);
// Qno:11
// const futureDate = new Date(25015, 11, 5); 
//     const currentHours = futureDate.getHours();
//     // Set the date object one hour ahead
//     futureDate.setHours(currentHours + 1);
//     document.write("Updated Date (one hour ahead): " + futureDate);

// Qno:12

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();

// // Set the date object to 100 years back
// currentDate.setFullYear(currentYear - 100);

// // Display the updated date in an alert box
// alert("The date 100 years back is: " + currentDate);

    // Qno:13

    // const age = prompt("Please enter your age:");

    // // Get the current year
    // const currentYear = new Date().getFullYear();

    // // Calculate the birth year
    // const birthYear = currentYear - age;

    // // Display the birth year in the browser
    // document.write("You were born in the year: " + birthYear);

    // Qno:14

    // const customerName = "Umra Badar Wajid Ullah"; // Replace with your name
    // const currentDate = new Date();
    // const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    // // Bill details
    // const numberOfUnits = 350; // units used, replace with actual
    // const chargesPerUnit = 12.50; //  charge per unit, replace with actual

    // // Calculate amounts
    // const netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
    // const latePaymentSurcharge = 100.00; 
    // const grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

    // document.write("<h2>K-Electric Bill</h2>");
    // document.write("Customer Name: " + customerName + "<br>");
    // document.write("Current Month: " + currentMonth + "<br>");
    // document.write("Number of Units: " + numberOfUnits + "<br>");
    // document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
    // document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
    // document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
    // document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");
