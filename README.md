# Simple REST API
This is a simple REST API built with Node.js and Express.js which uses in memory storage and it allows you to create users as well as retrieving them.

---

- Programming Language used: Javascript(Node JS)
- Framework: Express.JS

---

## How to run the API
 1. Clone the repository
    ```bash
    git clone https://github.com/ofallbrains/Simple_RestAPI.git
    cd Simple_RestAPI
2. Install dependecies :
    ```bash
    npm install
3. Start the sever
    ```bash
    node server.js

## Example requests

### Create a User (POST /users)
- Method: POST  
- URL: `http://localhost:3000/users`
- Headers: 
  `Content-Type: application/json`  
- Body (JSON):
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

### Get a user by ID(GET: /user:id)
. Method: GET
. URL: http://localhost:3000/users/1
