# E-Commerce-Api

## Description 
The E Commerce Api is an application that is used to keep track of a businesses products. Categories with products and their respective tags are all added tracked within the database. This application utilizes sequlize to dynamically create a mysql database without having to write hard SQL code. During the process of building this application I learned how to utilize the ORM sequelize to create SQL databases without writing any SQL. I alos learned how to create the relationships between the different categories. The struglle during development came from understanding which foreign key constraint to add to each model relationship. 

## Installation

1. Git clone the repository using the following command: git clone git@github.com:StunnaDawg/E-Commerce-Api.git
2. Through the CLI cd into the E-Commerce-Api directory
4. Make sure to have nodejs(https://nodejs.org/) and Mysql(https://www.mysql.com/) installed
3. Ensure to 'npm install' all the dependencies
4. Ensure you add your mysql password to the .env file 
5. Run the command 'node seeds/index.js' or 'npm run seeds' to seed the database
6. Run the command 'node server.js' to start the server on the local host
7. Utilize the application Insomnia(https://insomnia.rest/download) to GET, POST, PUT, DELETE the data from the database
    - If you do not have Insomnia downloaded follow the link (https://insomnia.rest/download)
    - An example get request would be as follows http://localhost:3001/api/tags/

## Usage

Upon downloading the application make sure you do the following:
- run 'npm install' so that the dependcies are installed
  - If the dependencies do not exist: run 'npm i express', 'npm i mysql2', 'npm i sequelize', and 'npm dotenv' to download the latest version of each npm
- run 'node seeds/index.js' or 'npm run seed' to seed the database
    - ENSURE PASSWORD IS SET IN THE .ENV FILE BEFORE SEEDING OR AN ERROR WILL OCCUR d
- run 'node server.js' to start the local server

## Screenshots

[!Alt](./Develop/images/Screenshot%202023-04-19%20at%202.27.21%20PM.png)

[!Alt](./Develop/images/Screenshot%202023-04-19%20at%202.25.51%20PM.png)

[!Alt](./Develop/images/Screenshot%202023-04-19%20at%202.24.56%20PM.png)

## Demo Video Link

https://watch.screencastify.com/v/FntFTeGn7CyYluCm68go

## Dependencies 

- nodeJS: https://nodejs.org/en
- mysql2: https://www.mysql.com/ 
- inquirer: https://www.npmjs.com/package/inquirer
- express: https://www.npmjs.com/package/express 
- sequelize: https://www.npmjs.com/package/sequelize
- dotenv: https://www.npmjs.com/package/dotenv 