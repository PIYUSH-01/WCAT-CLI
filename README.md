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

*_You can find detailed explanation of each and every flag that has been added into this CLI till now below along with a link that'll lead you to it's demo._*


2. In order to give this custom CLI a feel of an original one we've created a custom script that enabled us to use **wcat** in place of **npm run wcat** while doing/performing something with our CLI.



## Flags added till now

Flag name | Flag's function | Flag's Demo
:---: | --- | :---:
`-pd` | print the data of the file given. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-pd)
`-sd` | sort the data of the file given. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-sd)
`-rs` | split the data with spaces in between and then join them without any space betweeen them. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-rs)
`-rn` | split the data whenever encounter a "newline" and then join all together in one line. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-rn)
`-remspec` | remove specific argument that we'd pass in the statement with a % in front of it. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-remspec)
`-rsc` | remove whatever is given in front of this flag except letters and spaces. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-rsc)
`-s` | add serialised numbering in front of all the lines present in the file given. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-s)
`-sn` | add serialised numbering in front of all the non-empty lines present in the file given. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-sn)
`-rel` | remove all extra/empty lines present in our file | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-rel)
`-rel1` | remove all extra/empty lines except 1 empty line after every non-empty line present in our file | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-rel1)
`-a2f1` | read the given files and then append their data and add it into a new file. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-a2f1)
`-cf` | then delete/clear the contents of the given file/files. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-cf)
`-df` | then delete the given file/files. | [Click here](https://github.com/PIYUSH-01/WCAT-CLI/blob/main/README.md/#-df)


## Flags demo

<a name="-pd"></a>
### -pd
![Screenshot 2021-08-27 at 2 42 58 PM](https://user-images.githubusercontent.com/52041719/131103664-7c9cfc4a-633b-496c-9dce-20aa107199db.png)


<a name="-sd"></a>
### -sd
![Screenshot 2021-08-27 at 3 00 01 PM](https://user-images.githubusercontent.com/52041719/131107094-3a0840b7-287e-440e-b27d-d8c4e2dd9086.png)


<a name="-rs"></a>
### -rs
![Screenshot 2021-08-27 at 3 00 28 PM](https://user-images.githubusercontent.com/52041719/131107230-292384b4-f6a6-4e9e-b6ae-6428c49f3a0a.png)


<a name="-rn"></a>
### -rn
![Screenshot 2021-08-27 at 3 00 48 PM](https://user-images.githubusercontent.com/52041719/131107286-72f42666-7b7e-43af-ba6c-b644b527fa3a.png)


<a name="-remspec"></a>
### -remspec
![Screenshot 2021-08-27 at 3 01 37 PM](https://user-images.githubusercontent.com/52041719/131107430-fcdf3746-b10b-444e-9e0c-5b211a1e95a9.png)


<a name="-rsc"></a>
### -rsc
![Screenshot 2021-08-27 at 3 02 19 PM](https://user-images.githubusercontent.com/52041719/131107508-106b2fb1-06bd-4d52-988c-d3cf5e7b25be.png)


<a name="-s"></a>
### -s
![Screenshot 2021-08-27 at 3 02 37 PM](https://user-images.githubusercontent.com/52041719/131107580-2a8f52c2-a847-4773-85ca-b9c477b94c65.png)


<a name="-sn"></a>
### -sn
![Screenshot 2021-08-27 at 3 02 50 PM](https://user-images.githubusercontent.com/52041719/131107640-b1665f8e-0e6d-406d-8c84-44ba7e696b0e.png)


<a name="-rel"></a>
### -rel
![Screenshot 2021-08-27 at 3 03 16 PM](https://user-images.githubusercontent.com/52041719/131107778-238ef1e5-a2a6-40f5-8d12-cb725b4217f1.png)


<a name="-rel1"></a>
### -rel1
![Screenshot 2021-08-27 at 3 03 31 PM](https://user-images.githubusercontent.com/52041719/131107856-120ad06b-c82f-44ed-a36f-6dd69864d446.png)


<a name="-a2f1"></a>
### -a2f1
![Screenshot 2021-08-27 at 3 04 09 PM](https://user-images.githubusercontent.com/52041719/131107885-641005f2-bb90-4a65-a8b9-6cbe2656b283.png)


<a name="-cf"></a>
### -cf
![Screenshot 2021-08-27 at 3 05 35 PM](https://user-images.githubusercontent.com/52041719/131107938-094ec504-340d-4ac8-bde5-5bdb4bb0c01d.png)


<a name="-df"></a>
### -df
![Screenshot 2021-08-27 at 3 05 54 PM](https://user-images.githubusercontent.com/52041719/131107971-5d8c1e1a-cfb8-4c0c-922e-6e51b5f9ef5b.png)



