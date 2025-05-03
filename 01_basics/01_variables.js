const accountId = 144553
let accountEmail = "Nishant@google.com"
var accountPassword = "12345"

accountCity = "Shimla"  // avoid this type declaration
let accountState;  // undefined

// accountId = 2  // Not allowed 
accountEmail = "NcNC@gmail.com"
accountPassword = "212121"
accountCity = "Jaipur"

console.log(accountId);

/* 
    Prefer Not To use var 
    Because Of Issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])