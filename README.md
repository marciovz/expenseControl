# Expense Control

### Create an account and manage your expenses


> * Launch your expenses
> * Schedule payments
> * Track the flow of your bills daily


### What is it? #

>Expense control is an API that either provides services for managing your expenses

### How to use it?

*Note: This project is under development, so some of its features may be unavailable or not working properly. It is recommended for testing purposes only.*

#### Download

> Clone or download the project files to a folder on your local machine

#### Configurations

> In the Config file:
> * Set an address for the mongoDB database
> * Set a secret key for token encryption


#### Installation
> Make sure you have the node installed
> Using the terminal, insede the project root folder, run the command:

    -> npm install
> Start the server with the command:

	-> npm start


#### Use

*Note: Your can develop your own interface or use other software to make the API requests*

> Below we find example of accessing the API using curl commands

##### Creating an account

```
curl -X POST
  -H "Content-Type: application/json"
  -d '{"name":"PUT_YOUR_NAME", "email":"PUT_YOUR_EMAIL", "password":"PUT_YOUR_PASSWORD"}'
  http://localhost:3000/auth/register
```
` Response: return the object created or an object error`

##### Logging in

```
curl -X POST
  -H "Content-Type: application/json"
  -d '{"email":"PUT_YOUR_EMAIL", "password":"PUT_YOUR_PASSWORD"}'
  http://localhost:3000/auth/login
```
` Response: return a token object or an object error`

##### Adding an expense
```
curl -X POST
  -H "Content-Type: application/json"
  -H "token: PASTE_HERE_YOUR_TOKEN "
  -d '{"provider":"PUT_PROVIDER_NAME", "type":"PUT_TYPE_EXPENSE", "value":PUT_VALUE, "dateExpense":"2018-05-17"}'
  http://localhost:3000/expense
```
` Response: return the object added or an object error`

##### Getting all the expenses
```
curl -X GET
  -H "Content-Type: application/json"
  -H "token: PASTE_HERE_YOUR_TOKEN "
  http://localhost:3000/expense
```
` Response: return a list of object found, or an object error`

##### Getting an expense
```
curl -X GET
  -H "Content-Type: application/json"
  -H "token: PASTE_HERE_YOUR_TOKEN "
  http://localhost:3000/expense/iD_EXPENSE_NUMBER
```
` Response: returns an object found, or an empty object or an error object`

##### Editing an expense
```
curl -X PUT
  -H "Content-Type: application/json"
  -H "token: PASTE_HERE_YOUR_TOKEN "
  -d '{ PUT_HERE_THE_PROPERTIES_TO_BE_EDITED }'
  http://localhost:3000/expense/iD_EXPENSE_NUMBER
```
` Response: returns an object Edited, or an error object`

##### Removing an expense
```
curl -X DELETE
  -H "Content-Type: application/json"
  -H "token: PASTE_HERE_YOUR_TOKEN "
  http://localhost:3000/expense/iD_EXPENSE_NUMBER
```
` Response: returns an object deleted, or an error object`
