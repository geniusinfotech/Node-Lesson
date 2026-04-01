// create a package.json file:
// npm init -y

check Node.js Documations:

// fs ==> create file, crate folder, read file, read folder, delete file, delete folder, copy file, rename file, rename folder

=====================

# http and https modules

1. protocols ==> rules ==> how to send data, how to receive data, how to handle errors, how to manage connections, etc.
2. http ==> Hypertext Transfer Protocol
3. https ==> Hypertext Transfer Protocol Secure

// http and https modules are used to create web servers, make HTTP requests, and handle HTTP responses in Node.js. They provide a way to communicate over the web using the HTTP protocol. The http module is used for non-secure communication, while the https module is used for secure communication using SSL/TLS encryption.

// const http = require('http');
// const server = http.createServer(function(req, res){
res.end("Hello world")
})

// server.listen(3000)

// check out node docs

## npm understanding

// npm is a package manager for JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. npm allows developers to easily share and reuse code, manage dependencies, and automate tasks in their projects. With npm, developers can install and manage third-party libraries and tools, making it easier to build and maintain applications.

## module and package

// module is defualt install with node.js and it is a single file or a collection of files that can be imported and used in other parts of the application. A package, on the other hand, is a collection of modules that are bundled together and can be published and shared with others through npm. A package typically includes a package.json file that contains metadata about the package, such as its name, version, dependencies, and scripts.

// For example, the http module is a built-in module in Node.js that provides functionality for creating web servers and making HTTP requests. It can be imported and used in any Node.js application without needing to install it separately. On the other hand, a package like Express is a popular web framework for Node.js that provides additional features and functionality for building web applications. It is not included in Node.js by default and needs to be installed separately using npm before it can be used in an application.

// packages is you installed using npm and modules is you can use without installing anything.

## installing and uninstalling packeages:

// npm install packagename / npm i package name
// npm uninstall package name / npm un package name

## understanding node_modules

## dependencies

// dependencies are the packages that your project needs to run. They are listed in the package.json file under the "dependencies" section. When you install a package using npm, it is added to the dependencies list in the package.json file. These packages are required for your application to function properly and will be installed when someone else installs your project using npm install.
// npm i packagenmae

## devDependencies

// devDependencies are the packages that are only needed during the development phase of your project. They are listed in the package.json file under the "devDependencies" section. These packages are not required for your application to run in production, but they are useful for tasks such as testing, linting, and building your project. When someone else installs your project using npm install, the devDependencies will not be installed unless they specifically include the --dev flag.
// only install for development purposes, not needed in production environment.
// npm i package name --save-dev

## scripts - understaning default scripts and creating custom scripts

// start vs test vs build vs pre and post scripts
// npm run start vs npm start ==> npm start is a shortcut for npm run start. When you run npm start, it will look for a script named "start" in the package.json file and execute it. If you have defined a "start" script, it will run that command. If you haven't defined a "start" script, it will default to running node server.js. On the other hand, npm run start allows you to run any script defined in the package.json file by specifying the script name after "run". For example, if you have a script named "build", you can run it using npm run build.

// scripts are commands that can be run using npm. They are defined in the package.json file
// under the "scripts" section. There are some default scripts that are commonly used in Node.js projects, such as "start", "test", and "build". The "start" script is typically used to start the application, while the "test" script is used to run tests, and the "build" script is used to build the application for production.

// write into package.json file:
// start: "node server.js"
// pre and post scripts are special scripts that can be defined in the package.json file. A pre script is a script that runs before a specified script, while a post script runs after a specified script. For example, if you have a "build" script, you can define a "prebuild" script that runs before the build process starts, and a "postbuild" script that runs after the build process is complete. This allows you to perform additional tasks or setup before or after the main script is executed.

// npm i chalk
// npm i concurrency
