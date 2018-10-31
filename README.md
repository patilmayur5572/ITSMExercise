# ITSMExercise
This is simple application which fetches movie data from external API.

# Getting Started
Please clone ITSMExercise project into your local system to work with it. 

### Checking out the source-code from Github:
You need Git for cloning the project into your system. Please follow this guide for [Git installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). For cloning the the project, open Git Bash and give the following command: 
git clone https://github.com/patilmayur5572/ITSMExercise.git

### NPM, Angular CLI and Node.js installation:
The client-side is developed using Angular CLI and the server-side code is developed using Node.js. Please follow these instruction to download and install 
[Node Package Manager(npm) and Node.js](https://www.npmjs.com/get-npm). After Node Package Manager (npm) has been installed, download and install [Angular CLI from here](https://cli.angular.io/) <br>

### Starting the SydneyHappening project
After completing the installations, navigate to `ITSMExercise/server/` directory and give command <br>
`npm intall`<br>
This would install all the package dependencies for the server from `package.json file` in the `node_modules` directory. <br>  

Once the installation has finished, navigate to `ITSMExercise/server/server.js` and verify the server port address. By default the port number would be 3000, however it can be changed as per requirement. Start the server using command: <br>
`node server.js`<br>
If the port has not been changed, by default, the server should start at `http://localhost:3000` <br>

Navigate to `ITSMExercise/client/` and give command `npm install` to install all the client side dependencies in `package.json`<br>
Once the installation has been completed run command: <br>
`ng serve` <br> Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
