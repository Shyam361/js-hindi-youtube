const accountId=144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId=2    not allowed
accountEmail="123@dfg"
accountPassword="13454"
accountCity="Bangaluru"

{
    var accountPassword="23124"
}

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// 