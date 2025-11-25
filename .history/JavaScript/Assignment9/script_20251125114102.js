// Wait until the page loads completely
$(document).ready(function() {

    // 1. Dynamic Greeting Based on Time
    function setGreeting() {
        const hour = new Date().getHours();
        let greetingText = "";

        if (hour < 12) {
            greetingText = "Good Morning!";
        } else if (hour < 18) {
            greetingText = "Good Afternoon!";
        } else {
            greetingText = "Good Evening!";
        }

        $("#greeting").text(greetingText);
    }

    setGreeting(); // Call when page loads


    // 2. Change greeting to motivational quote when clicking button
    $("#changeGreetingBtn").click(function() {
        $("#greeting").text("Believe in yourself — every day is a new beginning!");
    });


    // 3. Toggle visibility of welcome message
    $("#toggleWelcomeBtn").click(function() {
        $("#welcomeMessage").toggle();
        // toggle() shows/hides element automatically
    });


    // 4. Show alert when greeting is clicked
    $("#greeting").click(function() {
        alert("You clicked the greeting!");
    });

});