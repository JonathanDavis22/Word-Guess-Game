$(document).ready(function() {

let input = {
    name: "",
    role: "",
    startdate: "",
    rate: 0,
};

$(".btn").on("click", function () {
    event.preventDefault();
    input.name = $("#employeename").val().trim();
    input.role = $("#role").val().trim();
    input.startdate = $("#startdate").val().trim();
    input.rate = $("#monthlyrate").val().trim();
    console.log(input);
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCLjdG3mVPNzkvJlhELqwAWb6bQqx8LPyM",
    authDomain: "employee-assignment-c7424.firebaseapp.com",
    databaseURL: "https://employee-assignment-c7424.firebaseio.com",
    projectId: "employee-assignment-c7424",
    storageBucket: "employee-assignment-c7424.appspot.com",
    messagingSenderId: "940486827597"
  };
  firebase.initializeApp(config);
let database = firebase.database();


// On-click function for taking the user-input values
$(".btn").on("click", function () {
    event.preventDefault();
    input.name = $("#employeename").val().trim();
    input.role = $("#role").val().trim();
    input.startdate = $("#startdate").val().trim();
    input.rate = $("#monthlyrate").val().trim();
    console.log(input);

    // Code for the push
    database.ref().push({
        name: input.name,
        role: input.role,
        startdate: input.startdate,
        rate: input.rate,
    });
});

    // Log everything that's coming out of snapshot
    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
        let newName = childSnapshot.val().name;
        let newRole = childSnapshot.val().role;
        let newDate = childSnapshot.val().startdate;
        let newRate = childSnapshot.val().rate;

    // 
        let tRow = $("<tr>");
        let tHead = $("<th scope='row'>").text(newName);
        let tRole = $("<td>").text(newRole);
        let tDate = $("<td>").text(newDate);
        let tMonths = $("<td>");
        let tRate = $("<td>").text(newRate);

        tRow.append(
            tHead,
            tRole,
            tDate,
            tMonths,
            tRate
        );
        $("#employee-data").append(tRow);

    })
});