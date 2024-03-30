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

## Dependencies
- [cors](https://www.npmjs.com/package/cors): ^2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.3.1
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [helmet](https://www.npmjs.com/package/helmet): ^7.1.0
- [joi](https://www.npmjs.com/package/joi): ^17.11.0
- [mongodb](https://www.npmjs.com/package/mongodb): ^6.5.0
- [mongoose](https://www.npmjs.com/package/mongoose): ^8.2.4
- [multer](https://www.npmjs.com/package/multer): ^1.4.5-lts.1
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.0.1
- [uuid](https://www.npmjs.com/package/uuid): ^9.0.1

## Completed
- [x] User module - create, edit
- [x] Reward module - create, read
```
This README.md file includes instructions for setting up the project in development mode, specifying environment variables, and marks the completion of the user module features. Adjustments can be made according to your project's specific needs.