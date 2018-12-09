// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
  apiKey: "AIzaSyA7yN2Y21J_NPjXHZZzLfJ92opa2AANEhg",
  authDomain: "deaththeman-deed4.firebaseapp.com",
  databaseURL: "https://deaththeman-deed4.firebaseio.com",
  projectId: "deaththeman-deed4",
  storageBucket: "deaththeman-deed4.appspot.com",
  messagingSenderId: "30700914224"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
let database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;
  }

      // Change the HTML to reflect the stored values
      $("#highest-bidder").text(highBidder);
      $("#highest-price").text(highPrice);
  
      // Print the data to the console.
      console.log(highBidder);
      console.log(highPrice);

// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  let bidderName = $("#bidder-name").val().trim();
  let bidderPrice = parseInt($("#bidder-price").val().trim());

  // Log the Bidder and Price (Even if not the highest)
  console.log(bidderName);
  console.log(bidderPrice);

  if (bidderPrice > highPrice) {
    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set( {
      highPrice: bidderPrice,
      highBidder: bidderName,
    });

    // Log the new High Price
    console.log("New high price!");
    console.log(bidderName);
    console.log(bidderPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});