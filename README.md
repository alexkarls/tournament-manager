# Tournament Manager

## Repo for a course at Linnaeus University

## About

- The api (backend) is implemented in Node with Express.
- The client (frontend) is created in React.

## Instructions

Some conditions must be met in order to run the application. 

- The dependencies (node_modules) must be installed
- It requires a .env file in the "api" and "script" folder.
- It requires that the mySQL database "tournament" exists.
- It requires that the tables in the database exists. <br>
Note that I have created a Node script to setup the tables, the script also assumes the database "tournament" is created.

**INSTALL THE DEPENDENCIES WITH "npm install"**

The script requires the command "npm install" to be executed in:

- The "script" folder

You should then be able to execute the script with the command "npm start" (execute it in the "script" folder)

The application requires the command "npm install" to be executed in:

- The root folder
- The "api" folder
- The "client" folder

**THE .env FILES**

Both the "api" and "script" folders require a .env file to pass database related information to the environment. 
<br>
The application requires a .env file in the "api" folder and the script in the "script" folder. 
This means that running the script does not require a .env file in the "api" folder and vice versa.
<br>
Note that this could be hard coded in the files instead. 

The .env files passes host, user and password information to the environment (process.env).
<br>
It should look like below:
<br>
<br>
DB_HOST=INSERT_HOST
<br>
DB_USER=INSERT_USER
<br>
DB_PASS=INSERT_PASS


When the database "tournament" exists, tables exists, .env exists (or hard coded) and dependencies are installed,
<br>
you should be able to run the application.

## Run the application

Execute the command "npm start" in the root folder. 

The backend (Node REST API) should start on PORT 4000.
<br>
The frontend (React) should start on PORT 3000.

http://localhost:3000/

## Problems

- Make sure that ALL dependencies (found in the root, client, api and scripts folder) are installed. 
- Make sure that the database "tournament" exists.
- Make sure that the tables exists, these are found in the scripts folder (the submission contains a model on this as well)
- Make sure that there are .env files in both the api and scripts folders and that these passes correct DB_HOST, DB_USER and DB_PASS (or hard code it in the .js files)

For problems, other concerns or questions I'm available at: ak223ke@student.lnu.se