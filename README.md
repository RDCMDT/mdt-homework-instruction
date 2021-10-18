### Home Assignment

This assignment will be similar to what you will be doing in your daily task. As a mobile developer, you will be creating new features by working with the various stakeholders to deliver great user experience to our customers.

In your day to day work, you will be liaising with the various departments, from backend to product owners to understand the requirements, refine stories and deliver what is needed in scrum sprints.

In this assignment, the backend, a server running on GCP, is already setup and you will just need to deliver the UI portion of it by consuming the APIs we provided.

We have also provided wireframes for your reference but please feel free to amend it as you see fit and we can walkthrough your ideas during your follow up interview.

Your project should utilise all the APIs and we will evaluate your project based on the following project criteria:

1. Project runs as expected without crashing
2. User is able to register
3. User is able to login
4. User is able to view the balances / transactions history in the account
5. User is able to make transfer to a receipient
6. Project is covered by unit test. You are free to use any testing library.

<b>You are free to use any other libraries that you feel is needed for this project. But we are hoping candidate DO NOT heavily rely on UI library so that we can analyse your coding skills better.</b>

Have fun with the project and good luck!

### APIs Usage

6 APIs have been provided for you via postman collection

1. POST /login
2. POST /register
3. GET /balance
4. GET /payees
5. GET /transactions
6. POST /transfer

The base url is https://green-thumb-64168.uc.r.appspot.com/

1. Register new user via `/register` by input username and password
2. Authenticate the user and retrieve the `jwt-token` via "/login"
3. In the subsequence apis call, pass the `jwt-token` into the header.
4. To make a transfer via `/transfer`, pass in the target `accountNo` you retrieve from `/payees`

```
{
    "receipientAccountNo": "[receipient-account-no]",
    "amount": 1000,
    "description": "testing"
}
```

Download [Postman](https://www.postman.com/product/rest-client/) and import the postman collection we provided to find out more APIs usage.

### Wireframe

The wireframe is created for your references. You are free to amend it and show us your creativity 😘
![register](https://user-images.githubusercontent.com/16426747/136692349-0ddc34fc-d25d-486a-b8c0-7c84ea3377b1.png)
![login](https://user-images.githubusercontent.com/16426747/136692347-279c946a-3a6a-47b4-861b-fa5ca3f4b22e.png)
![dashboard](https://user-images.githubusercontent.com/16426747/136692345-3864e377-524a-4472-9d52-9eabce6cde3b.png)
![transfer](https://user-images.githubusercontent.com/16426747/136692348-71cc46df-301c-46bf-96d5-7b578870d838.png)

### Submission

Push your source code to github and submit the repo link.

### Evaluation Criteria

- The required functions are working:
  - Login
  - Display dashboard
  - Make transaction
  - Refresh

* The required functions are working:

  - Login
  - Display dashboard
  - Make transfer

* The code is well-designed

  - Function
  - Interaction

* The UI is sensible and looks good

* The code isn't more complex than it needs to be

* Code has appropriate unit tests

  - Tests are well designed
  - Coverage

* Code is properly documented in README.md
