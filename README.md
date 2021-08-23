# WCAT-CLI
----------

Hey there!
Thanks for viewing my WCAT-CLI project. Below you can find the basic overview of this project and you can use this on your pc too.
Just install node before trying to run it if you haven't already.

## [Installation Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
### After Installing the prerequisites now you'd need to run the command _sudo npm link_(for mac) & _npm link_(for other OS) in order to be able to use 'wcat' in place of 'node index.js'.

Now that you're all set with the prerequisites let me give you short overview of the functionalitites that have been added:-

1. Multiple flags to make our custome CLI perform like a real CLI which includes functionalities like:-
* Reading file/files
* Writing in file/files
* Appending in file/files
* Removing certaing characters
etc.

*_You can find detailed explanation of each and every flag that has been added into this CLI till now below._*


2. In order to give this custom CLI a feel of an original one we've created a custom script that enabled us to use **wcat** in place of **npm run wcat** while doing/performing something with our CLI.



### Flags added till now

Flag name | Flag's function
:---: | ---
`-rs` | split the data with spaces in between and then join them without any space betweeen them
`-rn` | split the data whenever encounter a "newline" and then join all together in one line.
`-remspec` | remove specific argument that we'd pass in the statement with a % in front of it
`-rsc` | remove whatever is given in front of this flag except letters and spaces.
`-s` | add serialised numbering in front of all the lines present in the file given.
`-sn` | add serialised numbering in front of all the non-empty lines present in the file given.
`-rel` | remove all extra/empty lines present in our file
`-rel1` | remove all extra/empty lines except 1 empty line after every non-empty line present in our file
`-a2f1` | read the given files and then append their data and add it into a new file.
`-cf` | then delete/clear the contents of the given file/files.
`-df` | then delete the given file/files.

