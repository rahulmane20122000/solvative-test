```markdown
# Solvative Test

## Description
This is a Node.js project developed for the Solvative test. It includes various dependencies to set up a Node.js server, handle HTTP requests, interact with MongoDB, and manage environment variables using dotenv.

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Usage
- **Development:** 
  - Ensure you have MongoDB installed and running.
  - Create a `.env.dev` file in the root directory and paste the following:
    ```
    MONGO_CONNECTION_STRING=<your-mongo-connection-string>
    PORT=<your-port-number>
    ```
  - Run `npm run start:dev` to start the server in development mode using nodemon.


## Completed
- [x] User module - create, edit
- [x] Reward module - create, read,edit.send reward
```
This README.md file includes instructions for setting up the project in development mode, specifying environment variables, and marks the completion of the user module features. Adjustments can be made according to your project's specific needs.