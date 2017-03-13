# JavaScript Basics



How to run [/src/modules_and_classes/02/index.js](./src/modules_and_classes/02/index.js)
 example

1) Execute from current folder: 
`npm install`

Wait npm to to download all dependencies.

2) Execute: 
`npm run two`

This will run `\src\modules_and_classes\02.index.js`
because in [package.json](./package.json) in current folder line 8 says:

`"two": "babel-node src/modules_and_classes/02/index.js"`

. This means that npm will execute command with label `two`.

3) Go figure how to run other examples. :)
