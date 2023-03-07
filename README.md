# team-profile-generator
This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Description
When a user starts the application then they are prompted to enter the team manager’s:

* Name
* Employee ID
* Email address
* Office number

When a user enters those requirements then the user is presented with a menu with the option to:

* Add an engineer
* Add an intern
* Finish building the team


When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:

* Engineer's Name
* ID
* Email
* GitHub username


When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:

* Intern’s name
* ID
* Email
* School

When a user decides to finish building their team then they exit the application, and the HTML is generated.


:small_orange_diamond: When a user enters the project title then it is displayed as the title of the README

:small_orange_diamond: When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

:small_orange_diamond: When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

:small_orange_diamond: When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile

:small_orange_diamond: When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

:small_orange_diamond: When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

## Installation
1. To begin, [download](https://nodejs.org/en/download/) and install Node.js for your operating system.

2. Download this repository, open a terminal and use 'npm init -y' to initialize.

3. Use the folliwng commands to install 'fs', 'inquirer' and 'jest' packages:

    ```console
    npm install fs
    ```

    ```console
    npm install inquirer@^8.0.0
    ```

    ```console
    npm install jest
    ```

4. Invoke The application by using the following command:

    ```console
    node index.js
    ```

5. Use Jest for running the unit tests:

    ```console
    npm run test
    ```

## Usage
Follow the instructions and answer all the questions, a webpage that displays a team's basic info will be created in the output folder. Here is an example:

Screenshots:

![Terminal output](https://github.com/edithlinpy/README-Generator/blob/main/images/node-output-screen.jpg?raw=true)

![Jest test output](https://github.com/edithlinpy/README-Generator/blob/main/images/npm-run-test-screen.jpg?raw=true)

![Team Profile webpage](https://github.com/edithlinpy/README-Generator/blob/main/images/html-output-screen.jpg?raw=true)


A Team Profile webpage can be found in the output folder.

