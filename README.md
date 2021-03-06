# MERN FULL COMMERCE

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository

5. Add products list
6. Add routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products from Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from useReducer

10. Add Bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. npm install react-router-bootstrap
    3. update App.js
11. Create Product Details Screen
12. fetch product from backend
13. create 3 columns for image, info and action

14. Create Loading and Message Component

    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function

15. Implement Add To Cart

    1. Create React Context
    2. define reducer
    3. create reducer
    4. implement add to cart button click handler

16. Complete Add To Cart

    1. check exist item in the cart
    2. check count in stock in backend

17. Create Cart Screen
    1.crete 2 columns 2. display items list 3. create action column

18. Complete Card Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler fro checkout

19. Create Signin Screen
    1. create signin form
    2. add email and password
    3. add signin button

20. Connect To MongoDB Database
    1. create atlas mongodb database
    2. npm install mongoose
    3. connect to mongodb database   

21. Seed Sample Data
    1. create Product model
    2. create User model
    3. create seed route
    4. use route in server.js
    5. seed sample product

22. Seed Sample Users
    1. create user model
    2. seed sample users
    3. create user routes

23. Create Signin Backend API 
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken    
24. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header    
25.  Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
26. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api    
27. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit  
28. Create Place Order Screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order     
29. Implement Place Order Action
    1. handle place order action
    2. create order create api    
30. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns  

31. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use PayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend

32. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend

33. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info   

34. Publish to Heroku
    1. create and config node project
    2. server build folder in frontend folder
    3. create heroku account
    4. connect it to github
    5. create mongodb atlas database
    6. set database connection in heroku env variables
    7. commit and push 

  35. Add Sidebar and Search Box
    1. add sidebar
    2. add search box  
    
36. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results             
