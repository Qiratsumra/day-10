var userNames = ["Admin", "user2", "user4"];
userNames = [];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    if (userNames.includes("Admin")) {
        console.log("Hello Admin, would you like to see a status report?");
    }
    if (userNames.includes("user2")) {
        console.log(" Hello user2, thank you for logging in again.");
    }
    if (userNames.includes("user4")) {
        console.log(" Hello user4, thank you for logging in again.");
    }
}
