"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Current user
var current_users = ["Qirat", "Muhammad", "Zainab", "Dua", "kinza"];
// New user
var new_users = ["Qirat", "Saeed", "Kinza", "Sumra", "Abari"];
// loop through new users to check for user names avalibilaty
new_users.forEach(function (new_one_user) {
    // making the condition for user name already exist and save in oneCondition Variable
    var ourCondition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    // print different message using if-else statements
    if (ourCondition) {
        console.log("Sorry ".concat(new_one_user, " is already use!"));
    }
    else {
        console.log("This user name ".concat(new_one_user, " is available"));
    }
});
