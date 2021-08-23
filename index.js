#!/usr/bin/env node

const fs = require("fs");
let arguments = process.argv.slice(2);  

let flags = [];  
let filenames = [];
let specificArguments = []; 

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i); 
    } else if(i[0] == "%") {  
        specificArguments.push(i.slice(1));
    } else {
        filenames.push(i); 
    }
}

// functionalities available in our wcat

for(let file of filenames) {
    
    let fileData = fs.readFileSync(file, "utf-8");
    for(let flag of flags) {
        if(flag == "-sd") {

        }
        if(flag == "-rs") { //flag present -rs then split based on spaces and then convert them into array of elements where elements would be words in our string and then join all elements after split without any space betweeen them
            fileData = removeAll(fileData, " ");
        } 
        if(flag == "-rn") {  //flag present -rn then split whenever encounter a '\n' "newline" or jab ham split krenge use ham apni string par to wo "\n" ko alag se hi show krta hai hwenver a new line is encounterd thus it'd detect it and then we join our data wheenver we find new lines that is at the end our whole data of a file will get in one line.
            fileData = removeAll(fileData, "\n");
        } 
        if(flag == "-remspec") { //to remove specific argument that we'd pass in the statement with a % in front of them
            for(let specifically of specificArguments) {
                fileData = removeAll(fileData, specifically);
            }
        } 
        if(flag == "-rsc") { //flag present -rsc then remove whatever is present in it except letters and spaces.
            let tempString = "";
            for(let character of fileData) { 
                if((character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) || (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) || character== " ") {  
                    tempString += character;
                }
            }
            fileData = tempString;
        }
        if(flag == "-s") { //flg present -s then add numbering in fron of all the lines of the data present in the file given.
            addSequence(fileData);    
            return; 
        }
        if(flag == "-sn") { //flag present -sn then add nubering in front of all the non- empty lines present in the file.
            addSequenceTnel(fileData);
            return;
        }
        if(flag == "-rel"){ //flag present -rel then remove all the extra lines(basically the lines that are empty and does not have any data) and print it
            removeExtraLines(fileData);   
            return;
        }
        if(flag == "-rel1") { //flag present -rel1 then remove all extra lines except 1 lempty line after every non-empty line present in our file
            removeExtraLinesEceptOne(fileData);
            return;
        }

        if(flag == "-a2f1") { //flag present -a2f1 then read the given files and append them and then add the appended data into a new file.
            
            fileData = fs.readFileSync(file, 'utf-8', function() {
                console.log(fileData);
            });

            fs.appendFileSync("appendedFile.txt", fileData);
        }

        if(flag == "-cf") { //flag present -cf then delete/clear the contents of the given file/files.
            fs.writeFileSync(file, '');
            fileData = file + "successfully cleared."
        }

        if(flag == "-df") {  //flag present -df then delete the given file/files
            fileData = file + "succesfully deleted."
            fs.unlinkSync(file);
        }
    }

    console.log(fileData);  //PRINTING
}

// created a function for the functionality of removing something and then joining without them in ordeer to prevent its redundant typing in every if conditition
function removeAll(string, toBeRemovedData) {
    return string.split(toBeRemovedData).join("");
}

// below is the function to print numbers in front of all the lines of the file given
function addSequence(fileData) {
    let lines = fileData.split("\n");  
    for(let i = 0; i < lines.length; i++) { 
        console.log(i + 1 + ". " + lines[i]);
    }
}

// below is the function to print numbers in front of the non-empty lines of the file given
// function name:- add sequence to non empty lines.
function addSequenceTnel(fileData) { //similar to above just avoid lines which does not have any data
    let lines = fileData.split("\n"); 
    let count = 1; 
    for(let i = 0; i < lines.length; i++) { 
        if(lines[i] != "") { 
            console.log(count + ". " + lines[i]); 
            count++; 
        }
        else { 
            console.log(""); 
        }
    }    
}

// function to remve extra lines
function removeExtraLines(fileData) {
    let lines = fileData.split("\n");
    for(let i = 0; i < lines.length; i++) {
        if(lines[i] != "") { //case:- line not empty.
            console.log(lines[i]);
        }
    }
}

// below is the function to print all the lines from the givne file and remvoe all extra non-empty lines just leave 1 empty line after every non-empty line of our file.
function removeExtraLinesEceptOne(fileData) {
    let lines = fileData.split("\n");
    for(let i = 0; i < lines.length; i++) { //since ham i = 0 se start kar rhe the to it can go out of bounds or isse hoga ye ki jab maan lo hamari pehli hi line empty ho to hamein uske liye alag se check lagana padega like we've done below so to prevent it we can start our for from i=1 and then do the necessary changes in the 
        if(lines[i] != "") { //case:- line not empty.
            console.log(lines[i]);
        }
        else if(lines[i] == "" && lines[i-1] != "" && i != 0) { //case:- empty line just after a non-empty line. + we've to add another condition to check it is not the first line of our file because in case 
            // if it is the first line and it is empty then this if condition would satisfy becse the line just above it is not empty even though there is no line but since it'd consider it non-empty we've to add a condition for this special case so that we don't add one extra line before our first non-empty line.
            console.log("");
        }
    }
    // this function is not returning anyting kyuki ham yahi print kara rhe hai
}