/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "Git is what we use to help us keep our work organized, used to compare multiple submissions of a project so we can see the differences made between work. Also a way for us to save our work."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "GitHub is a remote location to save our projects so if our 'dog' eats our computer, we will still have our saved work. It is also a way for us to collaborate with other people on a project"

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
    description: "Initializes a local repository",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description: "coppies and existing repository in a new location",
    code: "git clone (location)"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: "'Prints status' - lets you know if there are added changes that need to be committed",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add ={
    description: "Saves the current state of your project. preps to commit",
    code: "git add . (or) git add (fileName)"
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: "saves the current added snapshot of your work in your history. after the commit is made, it won't be changed",
    code: "git commit -m '(your commit message)'"
}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: "moved your commited document(s) up to a gitHub or other remote repository",
    code: "git remote add origin (gitHub repository link), git branch -M main, git push -u origin main <= First git push, after you can just say git push "
}

// Just writing in this text so I can commit this document again