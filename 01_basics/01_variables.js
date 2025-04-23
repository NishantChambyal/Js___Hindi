const accountId = 144553

let accountEmail = "Nishant@gmail.com"

var accountPassword = "12345"

accountCity = "jaipur"

let accountState;

// accountId = 2 // NOT ALLOWED

accountEmail = "NCNC@gmail.com"
accountPassword = "21212121"
accountCity = "Shimla"


console.log(accountId);

/* 
Prefer not to use var
Because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

