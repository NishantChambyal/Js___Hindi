const accountId = 144553
let accountEmail = "Nishantgmail.com"
var accountPassword = "123456"

accountCity = "shimla"

let accountState; // undefined

// accountId = 2 // Not allowed

accountEmail = "NcNC.com"
accountPassword = 212121
accountCity = "jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])