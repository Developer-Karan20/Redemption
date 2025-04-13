const accountId = 144533
let accountEmail = "karangoswami@gmail.com"
var accountPassword = "12345"
accountCity = "Almora"
let accountState;

//accountId = 2 // not allowed

accountEmail = "kg@gmail.com"
accountPassword = "2121212121"
accountCity = "London"

/* 
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountEmail, accountId, accountPassword, accountCity,accountState]);