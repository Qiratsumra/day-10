import { log } from "console";

// Current user
let current_users:string[] = ["Qirat", "Muhammad", "Zainab", "Dua", "kinza"];

// New user
let new_users:string[] = ["Qirat", "Saeed", "Kinza", "Sumra", "Abari"];

// loop through new users to check for user names avalibilaty
new_users.forEach(new_one_user=> {
    // making the condition for user name already exist and save in oneCondition Variable
    let ourCondition=current_users.some(current_one_users=>current_one_users.toLowerCase()=== new_one_user.toLowerCase())
    // print different message using if-else statements
    if (ourCondition) {
        console.log(`Sorry ${new_one_user} is already use!`);
        
    } else{
        console.log(`This user name ${new_one_user} is available`);
        
    }
})


















