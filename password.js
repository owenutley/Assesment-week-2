// "Welcome to the pasword validator tool!")
console.log("Welcome to the password validator tool!")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

reader.question("Enter a password you want to validate *NOTE 'make sure your password is at least 10 characters long ", function(input){
    stringToken = input.toString()
    stringToken = input.trim(' ')

    if (stringToken.length >= 10){
        console.log("password created successfully")
    } else {
        console.log("password does not meet the requirements")
    }  

    reader.close()

})